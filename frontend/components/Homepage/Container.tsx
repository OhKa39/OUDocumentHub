import React from 'react';
import Book1 from '@/public/Book1.webp';
import Book2 from '@/public/Book2.webp';
import Book3 from '@/public/Book3.webp';
import DocumentItem from '../DocumentItem';

const documentItems = [
  {
    id: 1,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
  {
    id: 2,
    name: 'Sách công nghệ phần mềm',
    price: 299000,
    image: Book2,
    tag: 'New',
  },
  {
    id: 3,
    name: 'Sách quản trị nhân lực',
    price: 299000,
    image: Book3,
    tag: 'New',
  },
  {
    id: 4,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
  {
    id: 5,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
  {
    id: 6,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
  {
    id: 7,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
  {
    id: 8,
    name: 'Giáo trình pháp luật đại cương',
    price: 299000,
    image: Book1,
    tag: 'New',
  },
];

const Container = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
      {documentItems.map((item, idx) => (
        <DocumentItem key={idx} {...item} resolutionMobile={[310, 211]} />
      ))}
    </div>
  );
};

export default Container;
