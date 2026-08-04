import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";
import { getRepositories } from "@/lib/github";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export async function Projects({ dict }: { dict: Dictionary }) {
  const repositories = await getRepositories();

  return (
    <Section id="projects" eyebrow="04" title={dict.projects.title} subtitle={dict.projects.subtitle}>
      {repositories.length === 0 ? (
        <Reveal className="rounded-card border border-dashed border-border-strong glass p-10 text-center">
          <p className="text-sm text-fg-muted">{dict.projects.empty}</p>
          <a
            href={`https://github.com/${profile.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            {dict.projects.seeProfile}
          </a>
        </Reveal>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <Reveal
                key={repo.id}
                delay={(index % 3) * 80}
                as="article"
                className="relative flex flex-col rounded-card border border-border-subtle glass p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-accent"
                    >
                      <span className="absolute inset-0 rounded-card" aria-hidden="true" />
                      {repo.name}
                    </a>
                  </h3>
                  {repo.stars > 0 && (
                    <span className="shrink-0 font-mono text-xs text-fg-subtle">
                      ★ {repo.stars}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
                  {repo.description ?? dict.projects.noDescription}
                </p>

                {repo.topics.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <li
                        key={topic}
                        className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent-strong"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}

                {repo.language && (
                  <p className="mt-auto pt-5 font-mono text-xs text-fg-subtle">{repo.language}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={`https://github.com/${profile.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {dict.projects.seeProfile}
            </a>
          </Reveal>
        </>
      )}
    </Section>
  );
}
