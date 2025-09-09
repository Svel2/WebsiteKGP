'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  return (
    <header className="bg-[#1a357d]">
        <div className="Top-bar flex justify-between px-8 items-center border-b-1 border-[#ffffff26]">
            <div className="Brand flex bg-white -ml-8 py-5" aria-label="Kevin Guna Pratama">
                <div className="content px-8 flex gap-5">
                    <img src="/images/logoKGP.png"
                        alt="KGP"
                        width={48}  
                        height={48}
                        className="brand-logo"/>

                    <div className="Brand-text">
                        <div className="name text-black text-[16px] font-bold">
                            Kevin Guna Pratama
                        </div>
                        <div className="tag text-black text-[12px]">
                            Repair • Maintenance • Upgrades
                        </div>
                    </div>
                </div>
            </div>

            <div className="partners flex items-center" aria-label="Partners">
                <img src="/images/logoGCS.png"
                alt="GCS"
                className="partner-plain h-[56px] w-[94px] object-center align-middle"/>
            </div>
        </div>
        
        {/* Navigation */}
        <MegaMenu className="!bg-[#1a357d] dark:!bg-[#1a357d]">
      <div className="order-2 hidden items-center md:flex">
        {/* buat tombol ganti bahasa dari bahasa inggris ke bahasa indonesia yang memakai dropdown dan defaultnya adalah bahasa inggris jadi otomatis bakalan bahasa inggrs*/}
        <Button href="#">Contact Us</Button>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink>
          <MegaMenuDropdown toggle={<>Products & Service</>} className="!bg-white dark:!bg-white">
            <ul className="grid grid-cols-3 text-black">
              <div className="space-y-4 p-4 ">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Mechanical Electrical
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Logistic & Warehouse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    UPS Rework
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Customer Support Engineer
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Call Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Ducting System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Workshop Maintenance LCD
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Cassette Rework
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    ATM Module Rework
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Plumbing
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>
        </NavbarLink>
        <NavbarLink href="#About">About Us</NavbarLink>
        <NavbarLink href="#">Service Points</NavbarLink>
      </NavbarCollapse>
    </MegaMenu>
    </header>
  );
};

export default Header;