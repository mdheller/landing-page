import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useState } from "react"
import Drawer from "./Drawer"
import { GithubIcon, HamburguerIcon } from "./Icons"
import MenuButton from "./MenuButton"

const Header = ({ isOpen, toggleOpen }) => {
    return <header className="w-full bg-white flex justify-between items-center px-8 h-24">
        <MenuButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            isOpen={isOpen}
            onClick={toggleOpen}
            strokeWidth="3.2"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width="45"
            height="16.88"
        />
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3292.03 1135.01"
            className="w-40"
        >
            <g data-name="Layer 1">
                <path d="M1098.18 519.66c-25-27.4-38.68-65.28-38.68-109.2 0-45.13 15.31-85 42.71-112.42 23.78-24.18 57.22-38.28 98.73-38.28 74.14 0 118.46 39.49 127.73 99.93h-69.31c-5.23-23.37-24.58-41.1-56-41.1-47.54 0-71.32 39.49-71.32 91.87 0 52.79 27.4 91.87 72.53 91.87 37.48 0 59.64-25 62.46-50.36v-.81h-54v-52.38h120.09v154.73h-50l-4-34.65h-.81c-18.94 29.41-47.14 41.1-81.8 41.1-41.11.04-74.51-14.51-98.33-40.3zm255.88-23.77c0-45.54 36.27-59.24 79-64.88 38.69-4.83 52.39-8.86 52.39-23 0-13.29-8.46-22.16-28.21-22.16-21 0-31.43 9.27-33.44 26.6h-60.45c1.61-38.28 31-70.92 93.49-70.92 31 0 52 5.64 66.89 16.92 17.73 12.89 26.19 33 26.19 58.83v104c0 16.52 1.61 25.79 7.25 29.42v2.82h-63.66c-3.23-4.43-5.24-12.49-6.85-23h-.81c-12.09 17.33-30.22 28.21-61.25 28.21-41.12.02-70.54-22.14-70.54-62.84zm133-16.12v-24.58c-8.46 4.43-20.55 7.66-33.85 10.88-25.38 5.64-35.86 12.09-35.86 27.8 0 16.52 12.09 23 28.2 23 24.56-.03 41.45-14.94 41.45-37.1zm94.67-132.57h62.86v29.41h1.21c12.9-21.35 32.64-35.46 62.46-35.46 27 0 47.55 14.11 58 36.27h.81c16.12-25 38.28-36.27 64.88-36.27 46.74 0 70.11 31.84 70.11 78.18v134.18h-65.66V431c0-22.16-9.27-35.06-29-35.06-21 0-32.64 17.33-32.64 41.91v115.66h-65.69V431c0-22.16-9.26-35.06-29-35.06-20.55 0-32.64 17.33-32.64 41.91v115.66h-65.68zm340.9 102.8c0-61.65 43.12-108.8 106-108.8 29.41 0 52.79 9.67 70.52 25.79 24.58 22.57 36.66 58.43 36.26 100.34H1987.1c4 27.8 19.35 45.13 46.34 45.13 17.33 0 28.61-7.66 34.25-20.55h64.07c-4.43 18.53-16.52 36.26-34.65 48.76-17.33 12.08-38.28 18.93-64.47 18.93-68.1-.05-110.01-47.19-110.01-109.6zm146.27-21.76c-2.41-24.58-17.73-40.29-39.08-40.29-25 0-37.88 15.71-42.31 40.29zm76.16 58.38h62.06c2.42 20.55 16.12 30.62 37.88 30.62 19.74 0 32.23-7.25 32.23-20.55 0-18.53-25-20.55-52.38-25.38-35.86-6.05-74.14-15.72-74.14-64.07 0-43.52 40.29-66.09 89.05-66.09 58.43 0 89.86 25.39 93.08 66.09h-60.44c-2.42-18.54-14.91-24.18-33-24.18-16.12 0-28.61 6-28.61 18.94 0 14.51 23.37 16.52 49.56 21.36 36.27 6 79 15.31 79 68.1 0 45.13-39.89 68.5-93.89 68.5-60.46.04-98.38-27.81-100.4-73.34zm225.66 12.49V388.3h-27.4v-41.1h27.4v-65.28h64.07v65.28h37.48v41.1h-37.48V485c0 16.12 8.87 20.15 23 20.15 5.64 0 12.09-.41 14.51-.41v48c-5.64 1.62-18.14 3.23-35.87 3.23-38.31-.04-65.71-12.53-65.71-56.86zm114.04-48.35c0-62.06 44.33-109.2 110.41-109.2 66.49 0 110 47.14 110 109.2s-43.52 109.2-110 109.2c-66.08.04-110.41-47.15-110.41-109.2zm153.93 0c0-37.48-15.31-62.86-43.92-62.86s-43.52 25.38-43.52 62.86 14.91 62.45 43.52 62.45 43.92-24.98 43.92-62.45zm88.65-103.56h63.27v28.2h1.21c15.31-22.16 35-34.25 63.66-34.25 45.13 0 71.73 32.24 71.73 78.18v134.18h-65.68V432.62c0-21.76-10.88-36.67-32.24-36.67-21.76 0-36.26 18.14-36.26 43.52v114h-65.69zM2957 265.4h64.87v151.51l61.25-69.71h75.76l-72.53 77.36 81 129h-76.16l-49.56-84.22-19.75 21v63.26H2957zM1150.16 672.07h-83.81v-60.45h239.75v60.45h-84.62v227.67h-71.32z" />
                <path d="M1271.05 796.18c0-61.65 43.12-108.8 106-108.8 29.41 0 52.78 9.67 70.51 25.79 24.58 22.56 36.67 58.43 36.27 100.33h-148.31c4 27.81 19.34 45.14 46.34 45.14 17.33 0 28.61-7.66 34.25-20.56h64.07c-4.43 18.54-16.52 36.27-34.65 48.76-17.33 12.09-38.28 18.94-64.47 18.94-68.06 0-110.01-47.14-110.01-109.6zm146.27-21.76c-2.42-24.58-17.73-40.3-39.08-40.3-25 0-37.88 15.72-42.31 40.3zm88.68-81h62.86v32.24h1.21c14.5-24.58 31.43-35.46 56.41-35.46 6 0 10.07.4 12.89 1.61v56.42h-1.61c-40.29-5.65-66.08 14.1-66.08 58.83v92.68H1506zm154.31 0h62.86v29.42h1.21c12.89-21.36 32.64-35.46 62.46-35.46 27 0 47.54 14.1 58 36.27h.81c16.11-25 38.28-36.27 64.87-36.27 46.74 0 70.12 31.83 70.12 78.17v134.19H1915v-122.5c0-22.16-9.26-35.06-29-35.06-21 0-32.64 17.33-32.64 41.91v115.65h-65.68v-122.5c0-22.16-9.27-35.06-29-35.06-20.55 0-32.64 17.33-32.64 41.91v115.65h-65.68zm350.17-81.8h65.68v53.19h-65.68zm0 81.8h65.68v206.32h-65.68zm97.11 0h63.26v28.21h1.21c15.31-22.16 35.06-34.25 63.67-34.25 45.13 0 71.72 32.24 71.72 78.17v134.19h-65.68V778.85c0-21.76-10.88-36.67-32.23-36.67-21.76 0-36.27 18.13-36.27 43.52v114h-65.68zm220.01 148.69c0-45.53 36.27-59.23 79-64.87 38.69-4.84 52.39-8.87 52.39-23 0-13.3-8.47-22.16-28.21-22.16-21 0-31.43 9.27-33.45 26.59h-60.44c1.61-38.28 31-70.92 93.49-70.92 31 0 52 5.64 66.89 16.93 17.73 12.89 26.19 33 26.19 58.83v104c0 16.52 1.61 25.79 7.25 29.42v2.82H2467c-3.22-4.44-5.23-12.5-6.85-23h-.8c-12.09 17.33-30.22 28.2-61.25 28.2-41.1.05-70.5-22.14-70.5-62.84zm133-16.11v-24.58c-8.46 4.43-20.55 7.65-33.85 10.88-25.39 5.64-35.86 12.08-35.86 27.8 0 16.52 12.08 23 28.2 23 24.56-.03 41.49-14.94 41.49-37.1zm95.07-214.38h66.49v288.12h-66.49zm366.61 0H2764a64.91 64.91 0 00-64.91 64.92v158.27a64.91 64.91 0 0064.91 64.92h158.28a64.91 64.91 0 0064.92-64.92V676.54a64.91 64.91 0 00-64.92-64.92zm-98.34 158l-87.11 44.76v-36.24l70-35.91v-.5l-70-33.9v-37.24l87.11 44.76a30.5 30.5 0 010 54.26zm125.51 71.15h-109.7v-26.4h109.7z" />
                <path
                    d="M941.3 298.69a92.3 92.3 0 00-38.5-60.25c-16.54-13.74-110-91-124.09-102.65a74 74 0 00-59.71-15.9l-465.56 80c-73.52 15-129.79 84.76-128.71 159.84 0 0 0 386.64.12 483.43a73.76 73.76 0 0027.7 57.71l117 94c.84.7 1.7 1.38 2.56 2.05a92.21 92.21 0 0056.32 19.23 94.21 94.21 0 0015.62-1.34L866 925.31a92 92 0 0076.64-90.92V314.32a93.94 93.94 0 00-1.34-15.63z"
                    fill="#fff"
                />
                <path d="M650.9 516c1.3.24 2.09-1.78.85-2.17a215.43 215.43 0 00-39.26-8.27c-15.25-1.75-24.78-1.18-34.85 1.68-13.57 3.85-33.53 14.75-39.77 19.52L504 551.44a204.88 204.88 0 0143.48-24.63A182.31 182.31 0 01650.9 516zM448 933.21c-.48-1.09-2.24-.34-2.1.9q1.8 16.77 3.61 33.54L462 965.5q-7-16.14-14-32.29zm307.42-32.66a81.56 81.56 0 01-3 14.61l-.18.55 7.61-1.3a76.3 76.3 0 00-2.29-14.41c-.29-1.1-2-.68-2.14.55zm-18.37 17.76a78 78 0 00.09-14.52 68.19 68.19 0 00-15.4-37.88c-.69-.83-2.22.13-2 1.24a74.48 74.48 0 012.08 19.23 92.28 92.28 0 01-8.53 36zM503.6 823.33a503.87 503.87 0 0159.55-18.23A459.24 459.24 0 01679 792.31c1.34 0 1.84-2 .54-2.21a269.67 269.67 0 00-44.54-3c-16.11.22-47.34.92-87 14.44a291.22 291.22 0 00-45 19.83c-1.27.63-.73 2.46.6 1.96zm-13.3-171.55c3.75 3.65 8 6.83 11.49 6.93 39.21 1.16 68.12-11 75.8-15.22a1.22 1.22 0 00.51-1.74 173 173 0 00-40.54-37.28c-15.12-10-24-12.31-33.61-11.34a46.26 46.26 0 00-26.52 11.52c-10.58 9.54-17.54 24.93-14.18 37.93 3.26 12.66 14.83 17.35 19.42 19.2a42.81 42.81 0 0016.15 3c1.2 0 1.78-1.71.73-2.15a23.57 23.57 0 01-8.24-5.63 22.3 22.3 0 01-2.79-3.65c-.64-1.04.92-2.41 1.78-1.57zm187.18-27.62a39.31 39.31 0 01-8.25 8.54c-1.05.81-.46 2.31.73 1.89a58.84 58.84 0 0016.15-8.68c4.59-3.47 16.16-12.24 19.42-26a29.56 29.56 0 00-14.18-32.93c-10.82-5.94-22.93-3.07-26.52-2.17-9.6 2.41-18.49 7.91-33.61 23.19a291.87 291.87 0 00-40.54 51.58 1 1 0 00.51 1.56c7.68 1.48 36.59 3.48 75.8-11.51 3.53-1.35 7.75-6 11.5-11 .85-1.13 2.41-.31 1.78.94a39 39 0 01-2.79 4.59z" />
                <path d="M778.7 468.77a101.69 101.69 0 0028-11.36c37.25-22 49.46-60.23 51.94-69.18a.9.9 0 00-.85-1.22 228 228 0 00-78.38 14 254.54 254.54 0 00-36.74 16.79c-1.19.67-2.06-.8-1-1.73a221 221 0 0135.45-25.82 206.16 206.16 0 0174-26.17c1.37-.21 1.54-2.26.17-2.21a225.5 225.5 0 00-58.4 10c-15.32 4.75-42 17.25-95.28 42.25-3.35 1.58-7.82 5.18-27.29 14.19-2 .93-31.67 18-51.34 26.92 22.7-11.76 33.48-22.92 39.57-32.36.74-1.14-.55-2.15-1.55-1.23-30.89 28.54-59.35 33.1-76.18 35.18-23.27 2.88-52.66-1.11-64.74-3.05-1.18-.19-2 1.51-1 2.08 6.65 3.8 21.12 10.13 46.94 12.83 1.18.12 1 1.86-.19 2.18a125.41 125.41 0 01-22.4 3.76c-38.21 2.78-64.25-14.43-72.15-19-21.48-12.38-63-20.11-151.67 1.74-1.37.34-1.37 2.34 0 2.19a233.24 233.24 0 0131.39-1.46c28.55.6 55.37 1.56 72.59 6.43 1.15.32.62 2.16-.64 2.19-22.44.41-38.7-.19-63.16 4.12l-42.55 9.29c0 .06.06.15.1.25s7.37 17.31 20.71 30.47c9.79 9.65 30.66 22.47 61.44 27.28 1.13.18.93 1.88-.26 2.17a178 178 0 01-39 5.49h-2.42c-1.32 0-1.82 2-.57 2.21a170.05 170.05 0 0040.45 2.75c37.57-1.84 70.46-15.38 80.54-21.64.76-.48 3-1.89 3.18-1.6.58.78-13.49 15-31 26.45a157.34 157.34 0 01-47.23 20.91c-7.41 1.84-12.43 2.42-12.43 2.56 0 .32 24.05-1.12 48.1-9.82A159.66 159.66 0 00476.2 545a1 1 0 011.42 1.34A145.75 145.75 0 00458 590.81c-.92 3.75-1.62 7.35-2.15 10.77-.2 1.32 1.63 1.49 2.1.19a237 237 0 0128.27-53.9 251.31 251.31 0 0124.78-30.1 1.63 1.63 0 01.47-.32 387.75 387.75 0 0169.58-22c11.8-2.51 21.8-4.6 34.22-5.14a133.05 133.05 0 0165.93 14.14.83.83 0 01.34.3q16 24.51 31.93 49c.6.93 2.19.1 2-1a95.17 95.17 0 00-4-16.86 87.94 87.94 0 00-16.47-29c-.68-.8.32-2.19 1.35-1.87a149.16 149.16 0 0024.83 5.5 169.36 169.36 0 0042.42.2c1.38-.17 1.6-2.22.25-2.21a130.93 130.93 0 01-35.73-4.57 115.13 115.13 0 01-29-12.46c-1-.59-.14-2.25 1-2.08a173.39 173.39 0 0050.23-.1c30.44-4.39 55.3-15.67 71.71-24.88 1.21-.68.73-2.42-.56-2a186.91 186.91 0 01-30.45 7.2c-4.31.64-8.43 1.09-12.34 1.39-1.37.05-1.35-1.92-.01-2.24zm-446.37-94.91a.92.92 0 011.23 1.17q-4.11 14.6-8.21 29.18c-.3 1.08.9 1.68 1.73.87a149.62 149.62 0 0165.71-37.91c10.82-2.94 52.43-11.42 89.73 7.4 19.06 9.62 26.63 17.06 31.34 24.87.57.93 2.15.17 2-1-.53-5.67-4-14-20.9-26.75-15.22-11.49-36.32-14.48-48.14-15.3-1.21-.09-1.06-1.88.19-2.19 22.85-5.61 45.36-12 77.78-5.19 25.62 5.36 45.57 21.9 64 29.62a1.23 1.23 0 001.51-.7c4.6-10.07 33-35.21 60.07-49.05 35.46-18.11 62-21.54 73.7-22 1.2 0 1.27 1.65.09 2.13-10.12 4.09-28.7 12.28-40.48 26-13.29 15.52-16.46 22.54-15.9 28.86.09.95 1.29 1.14 1.92.29 8.72-11.7 44.1-50.89 88.91-61.12 22.72-5.18 42-.84 50.64 1.12a112.14 112.14 0 0148 23.64c.71.6 1.92-.17 1.86-1.17a62.26 62.26 0 00-4.73-20.37 56.25 56.25 0 00-16.64-21.94c-.78-.63-.08-2.06 1-2 12 .48 38.14 3.67 58.65 23.74a78.38 78.38 0 0116.52 23.72v-15.5a63.55 63.55 0 00-74.29-62.64l-521.93 89.58a63.55 63.55 0 00-52.81 62.64V416c25.6-26.45 56.33-38.33 67.45-42.14zm370.12 482.45a79.7 79.7 0 00-25.65-28.93c-1-.66-2.33.77-1.63 1.71a43.64 43.64 0 018.55 29.85c-1.24 17.63-11.34 30.87-16.62 36.7-.8.88-2.06.34-1.79-.76 2-8 4.6-25.31-4.49-41.28A47.82 47.82 0 00636.7 833a1.25 1.25 0 00-1.47 1.76 69 69 0 019.63 22.33 79.91 79.91 0 011.62 26.6 1.26 1.26 0 01-1.74 1.05 80 80 0 00-68.56-4.82C557.82 887 545.3 898.79 539 905.69a1 1 0 01-1.65 0 39.62 39.62 0 01-5.54-12c-4.55-16.53 2-33.08 6.42-41.75.57-1.13-.65-2-1.6-1.13a86 86 0 00-22.17 31.87c-7.29 18.79-4.77 34.08-2.88 41.18a1.27 1.27 0 01-1.7 1.44 41.09 41.09 0 01-20.39-28.17c-2.75-14.26 2-27.3 6.49-35.7.65-1.21-.81-2.08-1.71-1a139.19 139.19 0 00-22.13 35.09 116 116 0 00-7.62 69.49l244.45-41.93c3.67-16.43 6.1-42.44-6.52-66.77z" />
                <path d="M913.36 483.5a189.61 189.61 0 01-34.61 35.09c-1 .79-2.15-.19-1.48-1.29q6-9.87 12-19.75c.73-1.2-.69-2.18-1.64-1.13C872 513.55 836 546.64 792 546.44a81.82 81.82 0 01-42.67-12c-.89-.54-2.12.62-1.68 1.58a43.26 43.26 0 0013.13 16.62 47.57 47.57 0 0022.75 9.14c1.17.15.95 1.91-.28 2.18a75.46 75.46 0 01-25.25 1.2 63.92 63.92 0 01-13.74-3.3c-1.05-.38-2.12 1.07-1.38 1.88 8.92 9.78 16.91 23.8 15.82 42.16a66.19 66.19 0 01-5.18 21.53 1 1 0 00.36 1.29c39.16 21.5 54 50.54 59.62 64 11.28 27.28 12.76 59.28 12.44 59.42-.06 0-.33-1.16-1.3-3.82 0 0-.66-1.79-1.47-3.73-.92-2.19-8.18-12.53-19.85-26.51-.79-1-2.47.37-1.86 1.47 15.19 27.48 15.9 41.91 12.69 50.07-.29.74-1.88 4.65-3.53 8.71a1.27 1.27 0 01-1.55.78q-2.49-1-5.41-2.13a243 243 0 00-27.36-8.43.85.85 0 01-.65-.83c-.16-5.55-.48-12.05-1.08-19.25-1.79-21.46-3.69-42.31-13.26-65a139.36 139.36 0 00-5.88-12.23c-.61-1.12-2.47 0-2 1.2 2 5.25 3.79 10.85 5.42 16.82 7.64 28 8.17 54.27 6.47 75.22a1.31 1.31 0 01-1.47 1.18c-5.66-1.18-11.82-2.3-18.45-3.28a.9.9 0 01-.74-1.1c.51-3.08.94-6.28 1.24-9.59a119.4 119.4 0 00-3.78-43.22c-.34-1.24-2.27-.54-2.14.77q.53 5.19.68 10.92A163.59 163.59 0 01736.6 760a1.33 1.33 0 01-1.37 1c-45.81-5.41-88.41-1.39-96.21-.62-58.46 5.8-103.23 21-127.35 29.3a691.69 691.69 0 00-68.8 28.15.91.91 0 01-1.34-.51 145 145 0 01-5.41-43.5q.15-5.77.68-11.15c.13-1.36-1.8-1.37-2.14 0a131.38 131.38 0 00-3.78 44.54 114.21 114.21 0 002.27 14.24 1.32 1.32 0 01-.75 1.42c-7 3.43-13.4 6.66-19.05 9.56a.92.92 0 01-1.42-.67 236.58 236.58 0 016-82.41c1.63-6.54 3.46-12.79 5.42-18.72.46-1.38-1.4-1.83-2-.5-2.43 5.35-4.35 10.16-5.88 14.3-9.57 26-11.47 47.54-13.26 69.62a381.9 381.9 0 00-1.18 24 1.35 1.35 0 01-.73 1.15l-.41.21c-7.87 4.16-18.24 9.65-30.35 16.69a1 1 0 01-1.48-.52c-.55-2.52-3.82-17.25-3.46-29.53.48-16.8 7.83-32.75 14.94-44.41l-29.13 46.74c-.65 1-2.12.74-2-.41a167.59 167.59 0 0114.78-51.25c5.75-12.21 12-21.64 22.89-38.2 10.51-16 20-28.91 27.05-38.14a1.14 1.14 0 011.5-.38 48.45 48.45 0 0020.71 7.72c7.51 1 20.1 2.68 31.92-5.62a39.93 39.93 0 0012.2-14.11c.6-1.12-.64-2-1.59-1.15a50.77 50.77 0 01-10.14 7.29 46.61 46.61 0 01-14.35 5 35.94 35.94 0 01-29.14-8.13c-12.64-11.93-8.83-32.21-6.94-42.32a90.76 90.76 0 0112-30.43 1 1 0 00-1.45-1.3c-1.8 1.38-3.71 2.75-5.73 4.08a95.17 95.17 0 01-35 14.32c-1.18.22-1.54-1.33-.45-2a118.95 118.95 0 0033.71-31.45c.74-1-.28-2.15-1.34-1.43-11.22 7.57-28.44 16.95-49.66 20.48-20.74 3.45-36.22-.2-47.87-3a132.68 132.68 0 01-30.7-11.31c-1.06-.55-2.3 1.05-1.45 1.87l17 16.48c.74.71-.11 2.14-1.17 2a94.92 94.92 0 01-33.67-12.25c-2.38-1.45-4.59-3-6.73-4.62v313.81a63.55 63.55 0 0074.3 62.64l36.23-6.22a107.16 107.16 0 01-13.61-39.19c-4.5-31.12 4.18-58.57 9.71-72.72l-.09-.28A613.43 613.43 0 01500.56 801c107.77-40.42 200.44-38.38 236.13-30.78l5.81 1.47v-.05c.91.26 1.78.52 2.57.78 2.7.9 26.11 9 58.89 19.09l2.81.87a.86.86 0 01.59.68c10 55.57 6.78 77.72 6.78 77.72a143 143 0 01-10.4 36.09l57.38-9.87a63.55 63.55 0 0052.8-62.64V482.73c-.19.27-.37.51-.56.77z" />
                <path d="M185.82 889.49V371.9a110.82 110.82 0 0192.09-109.22l504.57-86.56-22-18.21a45.43 45.43 0 00-36.62-9.75l-464.93 79.92a134.92 134.92 0 00-105.57 131.67s.06 386.63.13 483.42a45.39 45.39 0 0017 35.37l13.84 11.12c.5-.06 1-.09 1.51-.17z" />
                <path d="M304.47 319.78l539.73-92.59-38.06-31.5-512.33 87.89A101.92 101.92 0 00209.12 384v525.59l32.46 26.07V394.38a75.68 75.68 0 0162.89-74.6z" />
            </g>
        </motion.svg>
        <motion.a whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }} target="_blank" rel="noopener" href="https://github.com/DidierRLopes/GamestonkTerminal">
            <GithubIcon className="w-10" />
        </motion.a>
    </header>
}

export default Header