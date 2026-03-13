import Avatar from "./Avatar";
import {
  AppIconX,
  AppIconInstagram,
  AppIconTikTok,
  AppIconBluesky,
  AppIconLinkedIn,
  AppIconThreads,
} from "./Icons";

const platforms = [
  { Icon: AppIconX },
  { Icon: AppIconInstagram },
  { Icon: AppIconTikTok },
  { Icon: AppIconThreads },
  { Icon: AppIconBluesky },
  { Icon: AppIconLinkedIn },
];

export default function SocialProof() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
      {/* Avatar stack + count */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2.5">
          <Avatar src="/avatars/sara.png" alt="User" size={32} />
          <Avatar src="/avatars/james.png" alt="User" size={32} />
          <Avatar src="/avatars/priya.png" alt="User" size={32} />
          <Avatar src="/avatars/emma.png" alt="User" size={32} />
        </div>
        <p className="text-sm text-muted">
          <span className="font-bold text-ink">347</span> creators on the waitlist
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-6 bg-ink/15" />

      {/* Platform icons */}
      <div className="flex items-center gap-2.5">
        {platforms.map((p, i) => (
          <p.Icon key={i} size={22} />
        ))}
      </div>
    </div>
  );
}
