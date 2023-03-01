interface IGithubClient {
  get: (
    path: string,
    params: Record<string, string | number>,
    cb: (err: any, status: any, body: any, headers: any) => void
  ) => void;
}

declare module 'octonode' {
  const github = {} as {
    client: (token?: string) => IGithubClient;
  };
  export default github;
}
