import { Card, SimpleGrid, Space, Stack, Text } from "@mantine/core";

type ProjectCardProps = {
  projectName: string;
  description: string;
};

function ProjectCard({ projectName, description }: ProjectCardProps) {
  const projectKebab = projectName.toLowerCase().replaceAll(" ", "-");
  const projectPath = `/projects/${projectKebab}`;
  return (
    <Card component="a" href={projectPath} c="var(--mantine-color-text)">
      <Text size="lg" fw={600}>
        {projectName}
      </Text>
      <Space h={8} />
      <Text size="sm">{description}</Text>
    </Card>
  );
}

export default function Projects() {
  return (
    <Stack>
      <h1>Projects</h1>
      <SimpleGrid cols={3} spacing="xl">
        <ProjectCard
          projectName="bkmk"
          description="A simple command line directory bookmark manager."
        />
        <ProjectCard
          projectName="co_mit"
          description="An AI-assisted CLI tool for committing code."
        />
        <ProjectCard
          projectName="Wacket"
          description="A WebAssembly compiler for a racket-like language."
        />
        <ProjectCard
          projectName="This Website"
          description="The website you are currently viewing."
        />
        <ProjectCard
          projectName="Tone Discretizer"
          description="A tool for analyzing the pitch of a sound."
        />
        <ProjectCard
          projectName="Playlist Genre Analyzer"
          description="Writeup on applying data science to musical genres."
        />
        <ProjectCard
          projectName="Smart Lights Controller"
          description="An IoT device for controlling lights."
        />
        <ProjectCard
          projectName="Old Website"
          description="The first version of this website (Ruby on Rails)."
        />
        <ProjectCard
          projectName="CAD Lock"
          description="A CAD model of a padlock."
        />
      </SimpleGrid>
    </Stack>
  );
}
