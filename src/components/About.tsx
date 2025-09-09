"use client";
import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";

export default function About() {
  return (
    <section id="About" className="py-10 bg-white">
      <div className="About us place-items-center">
        <h1 className="font-bold text-3xl text-black py-5">About Us</h1>
      </div>

      <div
        id="content"
        className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4"
      >
        <div className="foto flex-1 order-2 md:order-2">
          <Image
            src="/images/jumbotron1.jpg"
            alt="About Kevin Guna Pratama"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div className="paragraf flex-1 order-1 md:order-1 text-justify">
          <p className="mb-4 text-black leading-relaxed ">
            <strong>PT. Kevin Guna Pratama (KGP)</strong> adalah perusahaan
            nasional yang bergerak di bidang
            <em> ATM Maintenance & Services</em>. Kami berfokus pada layanan{" "}
            <b>perbaikan, perawatan, dan peningkatan</b> kualitas mesin ATM
            dengan standar industri terbaik.
          </p>
          <p className="mb-4 text-black leading-relaxed">
            Berdiri sejak tahun <b>2014</b>, KGP telah berkembang dari skala
            regional menjadi <b>mitra nasional</b> yang dipercaya berbagai bank
            dan vendor besar. Dengan filosofi
            <i> "fix-first, replace-last"</i>, kami menghadirkan layanan yang{" "}
            <b>hemat biaya, cepat, dan andal</b>.
          </p>
          <p className="text-black leading-relaxed">
            Hingga kini, KGP telah menangani lebih dari{" "}
            <b>5000 unit mesin ATM</b> di berbagai kota besar Indonesia, dengan
            dukungan teknisi tersertifikasi yang siap menjaga{" "}
            <b>operasional perbankan tetap lancar</b>.
          </p>
        </div>
      </div>

      <div className="visi-misi">
        <div className="content text-center">
          <h2 className="font-bold text-3xl text-black py-8">Visi & Misi</h2>
        </div>

        <div className="py-12">
          <div
            id="content1"
            className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4"
          >
          <Card href="#Visi" className="max-w-sm !bg-white border !border-gray-300 shadow-md">
            <h5 className="text-center text-2xl font-bold tracking-tight text-black">
              Visi
            </h5>
            <p className="text-justify font-normal text-black">
              Menjadi mitra terpercaya dalam layanan teknologi finansial dengan menghadirkan solusi inovatif untuk perawatan dan perbaikan ATM di Indonesia.
            </p>
          </Card>
          <Card href="#Mis" className="max-w-sm !bg-white border !border-gray-300 shadow-md">
            <h5 className="text-center text-2xl font-bold tracking-tight text-black">
              Misi
            </h5>
            <li className="text-justify font-normal text-black">
              Menyediakan layanan perawatan ATM yang andal dan tepat waktu.
            </li>
            <li className="text-justify font-normal text-black">
              Meminimalisir downtime dengan solusi cepat & akurat.
            </li>
            <li className="text-justify font-normal text-black">
              Mengedepankan efisiensi melalui filosofi fix-first, replace-last.
            </li>
            <li className="text-justify font-normal text-black">
              Menjadi partner strategis bank & vendor nasional.
            </li>
          </Card>
        </div>
        </div>
      </div>

      <div className="" id="conten2">
        <div className="content text-center">
          <h2 className="font-bold text-3xl text-black py-8">Core Values</h2>
        </div>

        <div className="py-12">
          <div
            id="content"
            className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4"
          >
            <Card
            className="max-w-sm !bg-white border !border-gray-300 shadow-md"
            imgSrc="/images/intregritas.png"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-black">
              Integrity
            </h5>
            <p className="font-normal text-black">
              We maintain trust by prioritizing honesty and responsibility.
            </p>
          </Card>
            <Card
            className="max-w-sm !bg-white border !border-gray-300 shadow-md"
            imgSrc="/images/Professionalism.png"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-black">
              Professionalism
            </h5>
            <p className="font-normal text-black">
              Services are provided by experienced and nationally certified technicians.
            </p>
          </Card>
          <Card
            className="max-w-sm !bg-white border !border-gray-300 shadow-md"
            imgSrc="/images/Speed.png"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-black">
              Speed
            </h5>
            <p className="font-normal text-black">
              Fast 24/7 response with effective solutions to minimize ATM downtime.
            </p>
          </Card>
          <Card
            className="max-w-sm !bg-white border !border-gray-300 shadow-md"
            imgSrc="/images/Innovation.png"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-black">
              Innovation
            </h5>
            <p className="font-normal text-black">
              We are always looking for new and creative ways to improve service quality.
            </p>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
