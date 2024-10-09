import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGithubActivity(username: string) {
  try {
    const { data: events } = await octokit.activity.listPublicEvents({
      username,
      per_page: 10,
    });

    return events.map((event) => ({
      type: event.type,
      repo: event.repo.name,
      createdAt: event.created_at,
    }));
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return [];
  }
}