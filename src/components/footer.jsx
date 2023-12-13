import React from 'react'

export default function Footer() {
    const date= new Date();
    const year = date.getFullYear();
  return (
    <div>
      <footer>
        <h3>Copyright © {year}. All rights are reserved</h3>
      </footer>
    </div>
  );
}
