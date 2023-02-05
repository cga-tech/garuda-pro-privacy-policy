import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-left py-12'>
            <NextImage
              useSkeleton
              src='/images/app-icon.png'
              width='40'
              height='40'
              alt='Icon'
            />
            <h1 className='mt-4'>
              Garuda-Pro Privacy and Policy
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              This Privacy Policy document contains types of information that is collected and recorded by Garuda Pro and how we use it.
            </p>
            <h2 className='mt-7'>
              Information Collection and Use
            </h2>
            <p className='mt-2 text-sm text-gray-800'>
              <b>Basic Account Information</b> : If your school create a Garuda account through our admin portal, they must
              provide us with some personal information, such as your name, username, password,
              email address, or phone number. On Garuda, your name and username are always
              listed publicly, including on your profile page and in search results, and you can use
              either your real name or a pseudonym. You can create and manage multiple Twitter
              accounts.<br /><br />
              <b>Contact Information</b> : Your school or you may use your contact information, such as your email
              address. Your will use your email for login to our services. We may use your contact information to
              send you information about our Services, to market to you, to help prevent spam, fraud, or abuse, and to help others find your
              account, including through third-party services and client applications.<br /><br />
              <b>Communities Information</b> :  Garuda Pro is
              primarily designed to help digitalize learning process in school. Besides that
              we also facilities teacher and student from various school in Indonesia to share
              information each other with Communities feature. Most of the
              information you provide us through Garuda Pro is information you are asking us to make
              public. You may provide us with profile information such as a fullname, school, and picture.
              Additionally, your public information
              includes the information you publish; the metadata provided with Communities, such as when
              you publish post; information about your
              account, such as name, school, and profile picture. Garuda pro
              broadly and instantly disseminates your public information to a wide range of users especially in Indonesia,
              customers, and services, developers, and publishers that
              integrate Garuda pro content into their services. When you share information or content like photos, videos, and
              links via the Services, you should think carefully about what you are making public.
              We may use this information to make inferences, like what topics you may be
              interested in. Our default is almost always to make the information you provide
              through the Services public.<br /><br />
              <b>Location Information</b> : We need information about your location especially for attendance feature.
              We will verify your attendance with your location, if your location is still in the tolerance range from your school it means your attendance is valid.
              . We determine your location by using other data from your device,
              such as precise location information from GPS, information about wireless networks
              or cell towers near your mobile device, or your IP address.
            </p>
            <h2 className='mt-7'>
              Consent
            </h2>
            <p className='mt-2 text-sm text-gray-800'>
              By using our services, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://member.garuda-21.com'>
                Garuda-21
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
