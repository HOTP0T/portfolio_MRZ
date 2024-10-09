import { NextResponse } from 'next/server';
import { getGithubActivity } from '@/lib/github';

export async function GET() {
  const username = 'yourgithubusername'; // Replace with your GitHub username
  const activity = await getGithubActivity(username);
  return NextResponse.json(activity);
}