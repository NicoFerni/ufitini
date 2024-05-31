import { FaHome, FaUser, FaDumbbell, FaAppleAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function TabBar() {
  return (
    <div className="flex justify-around items-center bg-gray-200 p-4 fixed bottom-0 w-full">
      <Link legacyBehavior href="/">
        <a className="text-center">
          <FaHome className="mx-auto" />
          <p>Home</p>
        </a>
      </Link>
      <Link legacyBehavior href="/fitness">
        <a className="text-center">
          <FaDumbbell className="mx-auto"/>
          <p>Fitness</p>
        </a>
      </Link>
      <Link legacyBehavior href="/recipes">
        <a className="text-center">
          <FaAppleAlt className="mx-auto"/>
          <p>Recipes</p>
        </a>
      </Link>
      <Link legacyBehavior href="/profile">
        <a className="text-center">
          <FaUser className="mx-auto"/>
          <p>Profile</p>
        </a>
      </Link >
    </div>
  );
}
