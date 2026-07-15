import { User } from '@phosphor-icons/react';
import type { TeamMember } from '../../types';
import Card from '../ui/Card';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Card hoverable={false} className="p-6 text-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full border-[1.5px] border-pink-primary bg-pink-primary/10 flex items-center justify-center mx-auto mb-4">
        {member.avatarPlaceholder ? (
          <span className="text-2xl">{member.avatarPlaceholder}</span>
        ) : (
          <User size={32} weight="bold" className="text-pink-primary" />
        )}
      </div>

      <h3 className="font-heading text-lg text-berry mb-1">{member.name}</h3>
      <p className="text-pink-primary font-semibold text-sm mb-3">{member.role}</p>
      <p className="text-berry/60 text-sm leading-relaxed">{member.bio}</p>
    </Card>
  );
}