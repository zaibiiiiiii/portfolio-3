import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ScrollScene.css';

function createStars() {
  const positions = [];
  const colors = [];
  const palette = ['#8cb4c2', '#aad0d8', '#d2e1e5'];

  for (let i = 0; i < 420; i += 1) {
    positions.push(
      (Math.random() - 0.5) * 180,
      (Math.random() - 0.5) * 100,
      -Math.random() * 150,
    );
    const color = new THREE.Color(palette[i % palette.length]);
    colors.push(color.r, color.g, color.b);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    }),
  );
}

function createPlanet() {
  const group = new THREE.Group();
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(7, 36, 28),
    new THREE.MeshBasicMaterial({
      color: '#8ca9b0',
      transparent: true,
      opacity: 0.08,
    }),
  );
  const wireframe = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.SphereGeometry(7.05, 24, 16)),
    new THREE.LineBasicMaterial({
      color: '#548c99',
      transparent: true,
      opacity: 0.18,
    }),
  );
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(10.6, 0.045, 4, 128),
    new THREE.MeshBasicMaterial({
      color: '#498c8d',
      transparent: true,
      opacity: 0.2,
    }),
  );

  ring.rotation.set(1.14, 0.05, 0.18);
  group.add(planet, wireframe, ring);
  group.position.set(18, 7, -62);
  return group;
}

function disposeScene(scene, renderer) {
  scene.traverse((object) => {
    object.geometry?.dispose();
    if (Array.isArray(object.material)) {
      object.material.forEach((material) => material.dispose());
    } else {
      object.material?.dispose();
    }
  });
  renderer.dispose();
}

function ScrollScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
    } catch (error) {
      console.warn('The 3D background is unavailable; using the CSS space fallback.', error);
      canvas.classList.add('space-canvas--fallback');
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 220);
    camera.position.set(0, 4, 24);
    const stars = createStars();
    const planet = createPlanet();
    scene.add(stars, planet);

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mouse = { x: 0, y: 0 };
    let animationFrame = 0;
    let isVisible = true;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (motionPreference.matches) renderer.render(scene, camera);
    };

    const render = () => {
      if (!isVisible) return;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
      camera.position.x += (mouse.x * 1.25 - camera.position.x) * 0.025;
      camera.position.y += (4 + progress * 3 + mouse.y * 0.45 - camera.position.y) * 0.025;
      camera.lookAt(mouse.x * 0.6, -8 + progress * 2, -50);
      stars.rotation.y = progress * 0.07;
      planet.rotation.y = progress * 0.25;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    const updatePointer = (event) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible && !motionPreference.matches) render();
      else window.cancelAnimationFrame(animationFrame);
    };
    const handleMotionChange = () => {
      window.cancelAnimationFrame(animationFrame);
      if (motionPreference.matches) renderer.render(scene, camera);
      else render();
    };

    resize();
    if (motionPreference.matches) renderer.render(scene, camera);
    else render();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    motionPreference.addEventListener('change', handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', updatePointer);
      document.removeEventListener('visibilitychange', handleVisibility);
      motionPreference.removeEventListener('change', handleMotionChange);
      disposeScene(scene, renderer);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-canvas" aria-hidden="true" />;
}

export default ScrollScene;
