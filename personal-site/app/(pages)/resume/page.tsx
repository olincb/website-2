import { Text, Stack } from "@mantine/core";

export default function Resume() {
  return (
    <Stack>
      <h1>Resume</h1>
      <p>Download <a href='/resume.pdf' target="_blank">here</a>.</p>
      <embed src="/resume.pdf" type="application/pdf" width="900" height="1200" />
    </Stack>
  )
}
