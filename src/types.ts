export type PageProps = {
  changeScore: (delta: number) => unknown;
  changeProfile: (profile: {
    name: string, alter: number
  }) => unknown;
  nextPage: () => unknown;
}