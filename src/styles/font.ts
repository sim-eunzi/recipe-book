import { css } from '@emotion/react';

export const font = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf')
        format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf')
        format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf')
        format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf')
        format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
    src:
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf')
        format('truetype');
    font-display: swap;
  }

  p {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .HEAD_24 {
    font-size: 24px;
    line-height: 36px;
  }

  .HEAD_20 {
    font-size: 20px;
    line-height: 30px;
  }

  .HEAD_16 {
    font-size: 16px;
    line-height: 24px;
  }

  .HEAD_14 {
    font-size: 14px;
    line-height: 22px;
  }

  .HEAD_12 {
    font-size: 12px;
    line-height: 18px;
  }

  .BODY_16 {
    font-size: 16px;
    line-height: 24px;
  }

  .BODY_14 {
    font-size: 14px;
    line-height: 22px;
  }

  .CAPTION_12 {
    font-size: 12px;
    line-height: 18px;
  }

  .HEAD_24,
  .HEAD_20,
  .HEAD_16,
  .HEAD_14,
  .HEAD_12,
  .BODY_16,
  .BODY_14,
  .CAPTION_12 {
    &.BOLD {
      font-weight: 700;
    }
    &.SEMIBOLD {
      font-weight: 600;
    }
    &.MEDIUM {
      font-weight: 500;
    }
    &.REGULAR {
      font-weight: 400;
    }
  }
`;

export enum Typography {
  HEAD_24_BOLD = 'HEAD_24 BOLD',
  HEAD_24_SEMIBOLD = 'HEAD_24 SEMIBOLD',
  HEAD_24_MEDIUM = 'HEAD_24 MEDIUM',
  HEAD_24_REGULAR = 'HEAD_24 REGULAR',

  HEAD_20_BOLD = 'HEAD_20 BOLD',
  HEAD_20_SEMIBOLD = 'HEAD 20 SEMIBOLD',
  HEAD_20_MEDIUM = 'HEAD_20 MEDIUM',
  HEAD_20_REGULAR = 'HEAD_20 REGULAR',

  HEAD_16_BOLD = 'HEAD_16 BOLD',
  HEAD_16_SEMIBOLD = 'HEAD_16 SEMIBOLD',
  HEAD_16_MEDIUM = 'HEAD_16 MEDIUM',
  HEAD_16_REGULAR = 'HEAD_16 REGULAR',

  HEAD_14_BOLD = 'HEAD_14 BOLD',
  HEAD_14_SEMIBOLD = 'HEAD_14 SEMIBOLD',
  HEAD_14_MEDIUM = 'HEAD_14 MEDIUM',
  HEAD_14_REGULAR = 'HEAD_14 REGULAR',

  HEAD_12_BOLD = 'HEAD_12 BOLD',
  HEAD_12_SEMIBOLD = 'HEAD_12 SEMIBOLD',
  HEAD_12_MEDIUM = 'HEAD_12 MEDIUM',
  HEAD_12_REGULAR = 'HEAD_12 REGULAR',

  BODY_16_BOLD = 'BODY_16 BOLD',
  BODY_16_SEMIBOLD = 'BODY_16 SEMIBOLD',
  BODY_16_MEDIUM = 'BODY_16 MEDIUM',
  BODY_16_REGULAR = 'BODY_16 REGULAR',

  BODY_14_BOLD = 'BODY_14 BOLD',
  BODY_14_SEMIBOLD = 'BODY_14 SEMIBOLD',
  BODY_14_MEDIUM = 'BODY_14 MEDIUM',
  BODY_14_REGULAR = 'BODY_14 REGULAR',

  CAPTION_12_BOLD = 'CAPTION_12 BOLD',
  CAPTION_12_SEMIBOLD = 'CAPTION_12 SEMIBOLD',
  CAPTION_12_MEDIUM = 'CAPTION_12 MEDIUM',
  CAPTION_12_REGULAR = 'CAPTION_12 REGULAR',
}
