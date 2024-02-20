import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { roboto } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-22 w-22 rotate-[15deg]" />
      <p className="text-[23px]">Aimee Dashboard</p>
    </div>
  );
}
