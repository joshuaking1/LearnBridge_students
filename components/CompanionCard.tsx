"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  subject,
  topic,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <span className="subject-badge">{subject}</span>
        <button className="companion-bookmark">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-700">{topic}</p>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/clock.svg"
            alt="bookmark"
            width={13.5}
            height={13.5}
          ></Image>
          <p className="text-xs text-gray-500">{duration} minutes</p>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">
                Lunch Lession
                </button>       
        </Link>
      </div>
    </article>
  );
};

export default CompanionCard;
