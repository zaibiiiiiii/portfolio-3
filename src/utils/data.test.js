import { experiences, personalInfo, projects, skillGroups } from './data';

describe('portfolio content', () => {
  test('includes valid primary contact and profile details', () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(personalInfo.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
  });

  test('includes complete experience records and skill groups', () => {
    expect(experiences.length).toBeGreaterThan(0);
    experiences.forEach((experience) => {
      expect(experience.company).toBeTruthy();
      expect(experience.role).toBeTruthy();
      expect(experience.achievements.length).toBeGreaterThan(0);
    });

    skillGroups.forEach((group) => {
      expect(group.title).toBeTruthy();
      expect(group.skills.length).toBeGreaterThan(0);
    });
  });

  test('describes grounded AI and automated delivery experience without invented metrics', () => {
    const currentRole = experiences[0];
    const aiSkills = skillGroups.find((group) => group.title === 'AI Systems and Automation');
    const optima = projects.find((project) => project.name === 'Optima AI Factory');

    expect(currentRole.summary).toContain('Optima AI Factory');
    expect(currentRole.achievements.join(' ')).toContain('MCP');
    expect(currentRole.achievements.join(' ')).toContain('automated QA');
    expect(aiSkills.skills).toEqual(
      expect.arrayContaining(['Python', 'JavaScript', 'Grounded RAG', 'Model Context Protocol (MCP)'])
    );
    expect(optima.highlights.join(' ')).toContain('Docker');
    expect(optima.highlights.join(' ').toLowerCase()).toContain('feedback');
    expect(optima.tags).toContain('Automated QA');
    expect(optima.highlights.join(' ')).toContain('GLiNER');
    expect(optima.highlights.join(' ')).toContain('guardrails');
    expect(optima.highlights.join(' ')).toContain('Optima MCP server');
  });

  test('featured project galleries have matching screenshot metadata', () => {
    const featuredProjects = projects.filter((project) => project.featured && project.imageSet);

    expect(featuredProjects.length).toBeGreaterThan(0);
    featuredProjects.forEach((project) => {
      expect(project.gallery.length).toBeGreaterThan(0);
      expect(project.gallery.every((image) => image.label && image.caption)).toBe(true);
      expect(project.tags.length).toBeGreaterThan(0);
    });

    const optima = projects.find((project) => project.name === 'Optima AI Factory');
    expect(optima.featured).toBe(true);
    expect(optima.featuredOrder).toBe(1);
    expect(optima.workflow.length).toBeGreaterThan(0);
    expect(optima.challenge).toBeTruthy();
    expect(optima.role).toBeTruthy();
    expect(optima.impact).toBeTruthy();
  });

  test('published Novus apps link to their iOS and Android listings', () => {
    const publishedApps = projects.filter((project) => project.storeLinks);

    expect(publishedApps).toHaveLength(2);
    publishedApps.forEach(({ storeLinks }) => {
      expect(storeLinks.ios).toMatch(/^https:\/\/apps\.apple\.com\//);
      expect(storeLinks.android).toMatch(/^https:\/\/play\.google\.com\//);
    });
  });
});
