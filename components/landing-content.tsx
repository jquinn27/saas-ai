"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

const testimonials = [
  {
    name: "Jack",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI application I have found.",
  },
  {
    name: "Jack",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI application I have found ever.",
  },
  {
    name: "Jack",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI application I have found so far.",
  },
  {
    name: "Jack",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI application I have found so far.",
  },
];

export default function LandingContent({}: Props) {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="text-lg">{testimonial.name}</p>
                    <span className="w-8 h-8 cursor-default rounded-full text-sm leading-8 text-white text-center bg-[#111827] inline-block">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                "{testimonial.description}"
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
