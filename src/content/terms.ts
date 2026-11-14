import { CONTACT_URL, type Locale } from './site'

interface Section {
  heading: string
  body: string
  link?: { label: string; href: string }
}

// Draft: the operator will refine these terms later (e.g. when paid features arrive).
export const TERMS: Record<Locale, { title: string; sections: Section[] }> = {
  ko: {
    title: 'Kkeujeok 서비스 약관',
    sections: [
      {
        heading: '약관의 적용',
        body: '이 약관은 필기 앱 Kkeujeok(이하 "앱")의 이용에 적용돼요. 앱을 사용하면 이 약관에 동의한 것으로 봐요.',
      },
      {
        heading: '서비스 내용',
        body: '앱은 손글씨 노트를 쓰고, 사용자의 Google Drive에 저장하고 동기화하는 기능을 제공해요. 현재 앱은 무료로 제공돼요.',
      },
      {
        heading: '계정과 데이터',
        body: '노트는 사용자의 Google Drive에 저장돼요. 운영자는 노트를 보관하거나 열람하지 않아요. 노트의 백업과 관리는 사용자의 책임이에요. 개인정보 처리는 개인정보처리방침을 따라요.',
      },
      {
        heading: '이용자의 책임',
        body: '법령을 어기거나 다른 사람의 권리를 침해하는 용도로 앱을 사용하면 안 돼요. 앱을 변조하거나 서비스 운영을 방해해서도 안 돼요.',
      },
      {
        heading: '서비스의 변경과 중단',
        body: '운영자는 앱의 기능을 바꾸거나 일부 또는 전부의 제공을 중단할 수 있어요. 중요한 변경은 앱이나 이 사이트에서 알려요.',
      },
      {
        heading: '유료 기능',
        body: '현재 유료 기능은 없어요. 앞으로 유료 기능이 생기면 그 전에 이 약관에 결제와 환불 조건을 추가해요.',
      },
      {
        heading: '면책',
        body: '앱은 있는 그대로 제공돼요. 운영자는 기기 문제, 네트워크 문제, Google Drive 서비스 문제, 사용자의 실수로 생긴 데이터 손실에 대해 법령이 허용하는 범위에서 책임지지 않아요.',
      },
      {
        heading: '약관의 변경',
        body: '이 약관은 바뀔 수 있어요. 바뀐 약관은 이 페이지에 게시한 때부터 적용돼요.',
      },
      {
        heading: '문의',
        body: '궁금한 점은 공개 이슈 페이지에 남겨 주세요.',
        link: { label: CONTACT_URL, href: CONTACT_URL },
      },
    ],
  },
  en: {
    title: 'Kkeujeok Terms of Service',
    sections: [
      {
        heading: 'Scope',
        body: 'These terms apply to your use of Kkeujeok, a handwriting note app ("the app"). By using the app you agree to these terms.',
      },
      {
        heading: 'The service',
        body: 'The app lets you write handwritten notes and stores and syncs them in your own Google Drive. The app is currently free.',
      },
      {
        heading: 'Accounts and data',
        body: 'Your notes are stored in your Google Drive. The operator does not keep or read your notes. You are responsible for backing up and managing your notes. Personal data is handled as described in the Privacy Policy.',
      },
      {
        heading: 'Your responsibilities',
        body: 'Do not use the app to break the law or infringe others\' rights. Do not tamper with the app or interfere with its operation.',
      },
      {
        heading: 'Changes and discontinuation',
        body: 'The operator may change the app or stop providing all or part of it. Important changes will be announced in the app or on this site.',
      },
      {
        heading: 'Paid features',
        body: 'There are no paid features today. If paid features are added, payment and refund terms will be added to these terms first.',
      },
      {
        heading: 'Disclaimer',
        body: 'The app is provided "as is". To the extent the law allows, the operator is not liable for data loss caused by device problems, network problems, Google Drive service problems, or your own mistakes.',
      },
      {
        heading: 'Changes to these terms',
        body: 'These terms may change. Changed terms apply from the time they are posted on this page.',
      },
      {
        heading: 'Contact',
        body: 'Please leave questions on the public issues page.',
        link: { label: CONTACT_URL, href: CONTACT_URL },
      },
    ],
  },
}
