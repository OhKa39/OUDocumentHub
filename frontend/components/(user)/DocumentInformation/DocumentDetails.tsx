'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import documents from '@/__mocks__/data/documents';
import Image from 'next/image';
import user from '@/__mocks__/data/user';
import MinusButton from '../Cart/MinusButton';
import Heart from '@/public/Hearth.svg';

const DocumentDetails = () => {
  const document = documents[0];
  const tag = documents[0].tag;
  return (
    <div className="flex h-fit flex-col lg:flex-row lg:gap-16">
      {/* image section */}
      <div className="flex w-full flex-col gap-4 lg:min-w-[542px]">
        {/* main image */}
        <div className="relative h-[729px] w-full bg-[#F3F5F7]">
          <div className="absolute left-10 top-10 z-[99] w-[15%] bg-white text-center text-2xl drop-shadow-md">
            {tag && (
              <p className="font-bold" data-testid="Tag">
                {tag}
              </p>
            )}
          </div>
          <Image
            src={document.image}
            priority
            // fill
            className="absolute inset-10 h-[90%] w-[90%]"
            style={{ objectFit: 'contain' }}
            alt="Document Main Image"
          />
        </div>
        {/* image list */}
        <div className="hidden gap-4 lg:flex"></div>
      </div>
      {/* details section */}
      <div className="flex w-full flex-col">
        {/* header */}
        <div className="flex flex-col gap-4">
          {/* star section */}
          <div className="flex items-end gap-4">
            <Rating
              initialValue={5}
              readonly={true}
              size={24}
              SVGstyle={{ display: 'inline' }}
              fillColor="#FFAB08"
              data-testid="Stars"
            />
            <p className="text-base text-[var(--neutral-07)]">11 người đánh giá</p>
          </div>
          <h1 className="text-5xl font-bold">Tray Table</h1>
          <p className="text-xl text-[var(--neutral-04)]">
            Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with
            removable tray top, handy for serving snacks.
          </p>
          <p className="text-2xl font-semibold text-[#B30000]" data-testid="DocumentPrice">
            {Number(1110000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-xl text-[var(--neutral-04)]">Người đăng: </p>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-full">
                <Image alt="User Avatar" src={user?.avatarLink!} className="absolute" fill />
              </div>
              <p className="text-xl">{user?.lastName + ' ' + user?.firstName}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="h-[52px] w-[127px]">
                <MinusButton />
              </div>
              <Button variant={'outline'} className="flex h-[52px] w-full space-x-4 border-2 border-black text-xl">
                <Image src={Heart} alt="Hearth Icon" width={24} height={24} />
                Thêm vào yêu thích
              </Button>
            </div>
            <Button className="h-[52px] text-xl">Thêm vào giỏ hàng</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
