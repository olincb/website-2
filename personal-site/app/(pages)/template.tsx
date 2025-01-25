"use client";

import styles from "@/app/page.module.css";
import { useState } from "react";
import Link from "next/link";
import { Group, Image, Title, Transition } from "@mantine/core";

function HomeButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Group
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href="/">
        <Group gap="0">
          <Image src="/my_icon.png" w="24" m="10" alt="OLIN Icon" />
          <Transition
            mounted={hovered}
            transition="scale-y"
            duration={400}
            timingFunction="ease"
          >
            {(trans_styles) => (
              <Title order={4} style={trans_styles} className={styles.title}>
                Christopher Baillie Olin
              </Title>
            )}
          </Transition>
        </Group>
      </Link>
    </Group>
  );
}

// This template should be used for all pages that are not the home page.
export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HomeButton />
      <div className={styles.page}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
