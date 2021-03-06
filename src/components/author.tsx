import { css } from '@emotion/core';
import React from 'react';

const list = css`
  list-style: none;
`;

const link = css`
  margin-left: 0.5rem;
`;

const img = css`
  height: 30px;
  width: 30px;
  margin-top: 5px;
  border-radius: 100%;
  border: 1px solid var(--brand-light);
`;

type Props = {
  username: string;
  size: string;
};

const Author = ({ username, size = '64' }: Props) => {
  if (!username) {
    return null;
  }

  username = username.trim();
  const githubLink = `https://github.com/${username}`;
  const githubImgLink = `https://github.com/${username}.png?size=${size}`;

  return (
    <li css={list}>
      <a
        css={link}
        href={githubLink}
        title={username}
        key={username}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          css={img}
          className="author-img"
          src={githubImgLink}
          alt={username}
        />
      </a>
    </li>
  );
};

export default Author;
