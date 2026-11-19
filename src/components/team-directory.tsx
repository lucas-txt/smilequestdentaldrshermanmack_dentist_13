"use client";

import * as React from "react";
import Image from "next/image";
import { Search, UserRound, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { team, teamGroups, type TeamMember } from "@/lib/team";
import { cn } from "@/lib/utils";

function MemberCard({
  member,
  onOpen,
}: {
  member: TeamMember;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white/50 p-2.5 text-left transition duration-500 hover:-translate-y-1 hover:border-rose/25 hover:bg-white/85 hover:shadow-lift"
    >
      <span className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-sand">
        <Image
          src={member.image}
          alt=""
          fill
          loading="eager"
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 17vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent opacity-60" />
      </span>
      <span className="flex flex-1 flex-col px-1.5 pb-1 pt-3.5">
        <span className="font-display text-lg leading-tight tracking-tight text-forest">
          {member.name}
        </span>
        <span className="mt-1 text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.1em] text-rose">
          {member.role}
        </span>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70 transition group-hover:text-forest">
          {member.bio?.length ? "Read bio" : "Meet the team"}
          <UserRound className="size-3" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}

export function TeamDirectory() {
  const [query, setQuery] = React.useState("");
  const [group, setGroup] = React.useState<(typeof teamGroups)[number]>("All");
  const [selected, setSelected] = React.useState<TeamMember | null>(null);

  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return team.filter((member) => {
      const matchesGroup = group === "All" || member.group === group;
      const matchesQuery =
        needle.length === 0 ||
        `${member.name} ${member.role} ${member.group}`
          .toLowerCase()
          .includes(needle);
      return matchesGroup && matchesQuery;
    });
  }, [group, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-2xl border border-forest/10 bg-white/45 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter team by department">
          {teamGroups.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setGroup(item)}
              aria-pressed={group === item}
              className={cn(
                "cursor-pointer rounded-full border px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] transition",
                group === item
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/12 bg-white/50 text-forest/70 hover:border-forest/30 hover:text-forest",
              )}
            >
              {item}
              {item === "All" ? (
                <span className="ml-1.5 text-[0.6rem] opacity-70">{team.length}</span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-64">
          <label htmlFor="team-search" className="sr-only">
            Search the SmileQuest team
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-forest/70"
            aria-hidden="true"
          />
          <input
            id="team-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or role"
            className="h-11 w-full rounded-full border border-forest/12 bg-white/70 pl-10 pr-9 text-sm text-forest outline-none transition placeholder:text-forest/70 focus:border-rose/60 focus:bg-white"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 inline-flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-forest/70 transition hover:bg-forest/[0.06] hover:text-forest"
              aria-label="Clear team search"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-xs font-semibold text-forest/70" aria-live="polite">
        Showing {filtered.length} of {team.length} team members
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              onOpen={() => setSelected(member)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-forest/20 bg-white/40 p-10 text-center">
          <p className="font-display text-2xl text-forest">No team members found.</p>
          <p className="mt-2 text-sm text-forest/70">
            Try a different name, role, or department.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setGroup("All");
            }}
            className="mt-4 cursor-pointer text-xs font-bold uppercase tracking-[0.14em] text-rose"
          >
            Clear filters
          </button>
        </div>
      )}

      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[88dvh] overflow-y-auto">
          {selected ? (
            <div className="grid gap-5 sm:grid-cols-[9rem_1fr]">
              <div className="relative aspect-[4/5] w-full max-w-44 overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={selected.image}
                  alt={`Portrait of ${selected.name}`}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow text-rose">{selected.group}</p>
                <DialogTitle className="mt-3">{selected.name}</DialogTitle>
                <DialogDescription>{selected.role}</DialogDescription>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-forest/70">
                  {selected.bio?.length ? (
                    selected.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))
                  ) : (
                    <p>Bio coming soon!</p>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
