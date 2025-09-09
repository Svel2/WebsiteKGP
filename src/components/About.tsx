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

      {/* Start visi & misi */}
      <div className="visi-misi">
        <div className="content text-center">
          <h2 className="font-bold text-2xl md:text-3xl text-black py-4 md:py-8">Visi & Misi</h2>
        </div>

        <div className="py-6 md:py-12">
          <div
            id="content1"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            <Card href="#Visi" className="w-full !bg-white border !border-gray-300 shadow-md">
              <h5 className="text-center text-xl md:text-2xl font-bold tracking-tight text-black">
                Visi
              </h5>
              <p className="text-justify text-sm md:text-base font-normal text-black leading-relaxed">
                Menjadi mitra terpercaya dalam layanan teknologi finansial dengan menghadirkan solusi inovatif untuk perawatan dan perbaikan ATM di Indonesia.
              </p>
            </Card>
            <Card href="#Mis" className="w-full !bg-white border !border-gray-300 shadow-md">
              <h5 className="text-center text-xl md:text-2xl font-bold tracking-tight text-black">
                Misi
              </h5>
              <ul className="space-y-2">
                <li className="text-justify text-sm md:text-base font-normal text-black leading-relaxed">
                  Menyediakan layanan perawatan ATM yang andal dan tepat waktu.
                </li>
                <li className="text-justify text-sm md:text-base font-normal text-black leading-relaxed">
                  Meminimalisir downtime dengan solusi cepat & akurat.
                </li>
                <li className="text-justify text-sm md:text-base font-normal text-black leading-relaxed">
                  Mengedepankan efisiensi melalui filosofi fix-first, replace-last.
                </li>
                <li className="text-justify text-sm md:text-base font-normal text-black leading-relaxed">
                  Menjadi partner strategis bank & vendor nasional.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      {/* End visi & misi */}


      {/* Start core values */}
      <div className="" id="conten2">
        <div className="content text-center">
          <h2 className="font-bold text-2xl md:text-3xl text-black py-4 md:py-8">Core Values</h2>
        </div>

        <div className="py-4 md:py-8">
          <div
            id="content"
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto px-3 md:px-4"
          >
            <Card
              className="w-full !bg-white border !border-gray-200 shadow-sm hover:shadow-md transition-shadow md:flex-row-reverse [&_img]:h-24 [&_img]:sm:h-28 [&_img]:md:h-32 [&_img]:object-cover [&_img]:rounded-r-lg [&_img]:md:rounded-l-none [&_img]:md:rounded-r-lg [&>div]:p-4 [&>div]:md:p-5"
              imgSrc="/images/intregritas.png"
              horizontal
            >
              <h5 className="text-lg md:text-xl font-semibold tracking-tight text-black mb-2">
                Integrity
              </h5>
              <p className="text-xs md:text-sm font-normal text-gray-700 leading-relaxed">
                We maintain trust by prioritizing honesty and responsibility.
              </p>
            </Card>
            <Card
              className="w-full !bg-white border !border-gray-200 shadow-sm hover:shadow-md transition-shadow md:flex-row-reverse [&_img]:h-24 [&_img]:sm:h-28 [&_img]:md:h-32 [&_img]:object-cover [&_img]:rounded-r-lg [&_img]:md:rounded-l-none [&_img]:md:rounded-r-lg [&>div]:p-4 [&>div]:md:p-5"
              imgSrc="/images/Professionalism.png"
              horizontal
            >
              <h5 className="text-lg md:text-xl font-semibold tracking-tight text-black mb-2">
                Professionalism
              </h5>
              <p className="text-xs md:text-sm font-normal text-gray-700 leading-relaxed">
                Services are provided by experienced and nationally certified technicians.
              </p>
            </Card>
            <Card
              className="w-full !bg-white border !border-gray-200 shadow-sm hover:shadow-md transition-shadow md:flex-row-reverse [&_img]:h-24 [&_img]:sm:h-28 [&_img]:md:h-32 [&_img]:object-cover [&_img]:rounded-r-lg [&_img]:md:rounded-l-none [&_img]:md:rounded-r-lg [&>div]:p-4 [&>div]:md:p-5"
              imgSrc="/images/Speed.png"
              horizontal
            >
              <h5 className="text-lg md:text-xl font-semibold tracking-tight text-black mb-2">
                Speed
              </h5>
              <p className="text-xs md:text-sm font-normal text-gray-700 leading-relaxed">
                Fast 24/7 response with effective solutions to minimize ATM downtime.
              </p>
            </Card>
            <Card
              className="w-full !bg-white border !border-gray-200 shadow-sm hover:shadow-md transition-shadow md:flex-row-reverse [&_img]:h-24 [&_img]:sm:h-28 [&_img]:md:h-32 [&_img]:object-cover [&_img]:rounded-r-lg [&_img]:md:rounded-l-none [&_img]:md:rounded-r-lg [&>div]:p-4 [&>div]:md:p-5"
              imgSrc="/images/Innovation.png"
              horizontal
            >
              <h5 className="text-lg md:text-xl font-semibold tracking-tight text-black mb-2">
                Innovation
              </h5>
              <p className="text-xs md:text-sm font-normal text-gray-700 leading-relaxed">
                We are always looking for new and creative ways to improve service quality.
              </p>
            </Card>
            <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>
      {/* Start core values */}

      {/* Start choice KGP */}


      {/* End choice KGP */}
    </section>
  );
}
