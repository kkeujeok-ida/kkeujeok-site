import { CONTACT_URL, type Locale } from './site'

const PERMISSIONS_URL = 'https://myaccount.google.com/permissions'

interface Section {
  heading: string
  body: string
  link?: { label: string; href: string }
}

export const PRIVACY: Record<Locale, { title: string; sections: Section[] }> = {
  ko: {
    title: 'Kkeujeok 개인정보처리방침',
    sections: [
      {
        heading: '노트는 내 Google Drive에만 저장돼요',
        body: '노트는 사용자의 Google Drive에만 저장돼요. 운영자는 노트에 접근할 수 없어요.',
      },
      {
        heading: '요청하는 권한',
        body: 'Kkeujeok은 Google Drive 권한 중 drive.file 하나만 요청해요. Kkeujeok이 만든 파일만 다루고, Drive에 있는 다른 파일은 볼 수 없어요.',
      },
      {
        heading: '서버와 수집',
        body: 'Kkeujeok에는 서버가 없어요. 분석 도구와 크래시 리포팅도 쓰지 않아요.',
      },
      {
        heading: '암호화',
        body: 'Drive 안에 있는 노트 파일은 Kkeujeok이 따로 암호화하지 않아요.',
      },
      {
        heading: '연결 해제와 권한 철회',
        body: '설정에서 연결을 해제하면 Kkeujeok이 Drive 권한을 거둬요. Google 계정의 권한 페이지에서도 언제든 권한을 철회할 수 있어요. Drive의 노트 파일은 그대로 남아요.',
        link: { label: 'Google 계정 권한 페이지', href: PERMISSIONS_URL },
      },
      {
        heading: '문의',
        body: '궁금한 점은 공개 이슈 페이지에 남겨 주세요.',
        link: { label: CONTACT_URL, href: CONTACT_URL },
      },
    ],
  },
  en: {
    title: 'Kkeujeok Privacy Policy',
    sections: [
      {
        heading: 'Your notes stay in your Google Drive',
        body: 'Notes are stored only in your own Google Drive. The operator cannot access your notes.',
      },
      {
        heading: 'Permission we ask for',
        body: 'Kkeujeok asks for one Google Drive permission, drive.file. It only works with files Kkeujeok created and cannot see other files in your Drive.',
      },
      {
        heading: 'Servers and data collection',
        body: 'Kkeujeok has no server. It uses no analytics and no crash reporting.',
      },
      {
        heading: 'Encryption',
        body: 'Kkeujeok does not separately encrypt the note files in your Drive.',
      },
      {
        heading: 'Disconnecting and revoking access',
        body: "Disconnecting in Settings revokes Kkeujeok's Drive access. You can also revoke it at any time on your Google Account permissions page. Note files in your Drive stay as they are.",
        link: { label: 'Google Account permissions page', href: PERMISSIONS_URL },
      },
      {
        heading: 'Contact',
        body: 'Leave questions on the public issue page.',
        link: { label: CONTACT_URL, href: CONTACT_URL },
      },
    ],
  },
}
