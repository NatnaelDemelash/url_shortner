import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link2Icon, LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const user = true;

  return (
    <nav className="py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/public/logo.png" className="h-16" alt="Logo" />
        </Link>
        <p className="font-extrabold">URL Trimmer</p>
      </div>

      <div>
        {!user ? (
          <Button onClick={() => navigate('/auth')}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full w-10 overflow-hidden">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="focus:outline-none"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Natnael Demelash</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link2Icon className="w-r h-4 mr-2" />
                <span>My Links</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 cursor-pointer">
                <LogOut className="w-4 h-r mr-2" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
