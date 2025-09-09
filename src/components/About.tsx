"use client";

import Image from "next/image";
import { Card } from "flowbite-react";

// Content data
const missionItems = [
  "Menyediakan layanan perawatan ATM yang andal dan tepat waktu.",
  "Meminimalisir downtime dengan solusi cepat & akurat.",
  "Mengedepankan efisiensi melalui filosofi fix-first, replace-last.",
  "Menjadi partner strategis bank & vendor nasional.",
];

const coreValues = [
  {
    title: "Integrity",
    imgSrc: "/images/intregritas.png",
    description:
      "We maintain trust by prioritizing honesty and responsibility.",
  },
  {
    title: "Professionalism",
    imgSrc: "/images/Professionalism.png",
    description:
      "Services are provided by experienced and nationally certified technicians.",
  },
  {
    title: "Speed",
    imgSrc: "/images/Speed.png",
    description:
      "Fast 24/7 response with effective solutions to minimize ATM downtime.",
  },
  {
    title: "Innovation",
    imgSrc: "/images/Innovation.png",
    description:
      "We are always looking for new and creative ways to improve service quality.",
  },
];

export default function About() {
  return (
    <section id="About" className="bg-white py-10">
      {/* About Us */}
      <div className="text-center">
        <h1 className="py-5 text-3xl font-bold text-black">About Us</h1>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row">
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <Image
            src="/images/jumbotron1.jpg"
            alt="About Kevin Guna Pratama"
            width={500}
            height={400}
            className="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="order-1 w-full text-justify md:order-2 md:w-1/2">
          <p className="mb-4 leading-relaxed text-black">
            <strong>PT. Kevin Guna Pratama (KGP)</strong> adalah perusahaan
            nasional yang bergerak di bidang
            <em> ATM Maintenance & Services</em>. Kami berfokus pada layanan
            <b>perbaikan, perawatan, dan peningkatan</b> kualitas mesin ATM
            dengan standar industri terbaik.
          </p>
          <p className="mb-4 leading-relaxed text-black">
            Berdiri sejak tahun <b>2014</b>, KGP telah berkembang dari skala
            regional menjadi <b>mitra nasional</b> yang dipercaya berbagai bank
            dan vendor besar. Dengan filosofi
            <i> &quot;fix-first, replace-last&quot;</i>, kami menghadirkan layanan yang
            <b>hemat biaya, cepat, dan andal</b>.
          </p>
          <p className="leading-relaxed text-black">
            Hingga kini, KGP telah menangani lebih dari
            <b>5000 unit mesin ATM</b> di berbagai kota besar Indonesia, dengan
            dukungan teknisi tersertifikasi yang siap menjaga
            <b>operasional perbankan tetap lancar</b>.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="pt-10">
        <div className="text-center">
          <h2 className="py-4 text-2xl font-bold text-black md:text-3xl">
            Visi &amp; Misi
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-2 md:gap-6">
          <Card className="w-full !bg-white border !border-gray-300 shadow-md">
            <h5 className="text-center text-xl font-bold tracking-tight text-black md:text-2xl">
              Visi
            </h5>
            <p className="text-justify text-sm font-normal leading-relaxed text-black md:text-base">
              Menjadi mitra terpercaya dalam layanan teknologi finansial
              dengan menghadirkan solusi inovatif untuk perawatan dan
              perbaikan ATM di Indonesia.
            </p>
          </Card>

          <Card className="w-full !bg-white border !border-gray-300 shadow-md">
            <h5 className="text-center text-xl font-bold tracking-tight text-black md:text-2xl">
              Misi
            </h5>
            <ul className="space-y-2">
              {missionItems.map((item) => (
                <li
                  key={item}
                  className="text-justify text-sm font-normal leading-relaxed text-black md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="pt-10">
        <div className="text-center">
          <h2 className="py-4 text-2xl font-bold text-black md:text-3xl">
            Core Values
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 px-3 py-4 md:grid-cols-2 md:gap-4 md:px-4">
          {coreValues.map((value) => (
            <Card
              key={value.title}
              imgSrc={value.imgSrc}
              horizontal
              className="w-full !bg-white border !border-gray-200 shadow-sm transition-shadow hover:shadow-md md:flex-row-reverse [&_img]:h-24 [&_img]:sm:h-28 [&_img]:md:h-32 [&_img]:rounded-r-lg [&_img]:object-cover [&_img]:md:rounded-l-none [&>div]:p-4 [&>div]:md:p-5"
            >
              <h5 className="mb-2 text-lg font-semibold tracking-tight text-black md:text-xl">
                {value.title}
              </h5>
              <p className="text-xs font-normal leading-relaxed text-gray-700 md:text-sm">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}

