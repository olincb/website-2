import { Stack } from "@mantine/core";

export default function Resume() {
  return (
    <Stack>
      <h1>Resume</h1>
      <p>Download <a href='/chris-olin-resume.pdf' target="_blank">here</a>.</p>
      <embed src="/chris-olin-resume.pdf" type="application/pdf" width="900" height="1200" />
    </Stack>
  )
}
