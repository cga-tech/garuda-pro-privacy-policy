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
          <div className='layout items-left relative flex min-h-screen flex-col py-12'>
            <NextImage
              useSkeleton
              src='/images/app-icon.png'
              width='40'
              height='40'
              alt='Icon'
            />
            <h1 className='mt-4'>Garuda-Pro Privacy and Policy</h1>
            <p className='mt-2 text-sm text-gray-800'>
              This Privacy Policy document contains types of information that is
              collected and recorded by Garuda Pro and how we use it.
            </p>
            <h2 className='mt-7'>Information Collection and Use</h2>
            <p className='mt-2 text-sm text-gray-800'>
              <b>Basic Account Information</b> : If your school create a Garuda
              account through our admin portal, they must provide us with some
              personal information, such as your name, username, password, email
              address, or phone number. On Garuda, your name and username are
              always listed publicly.
              <br />
              <br />
              <b>Contact Information</b> : Your school or you may use your
              contact information, such as your email address. Your will use
              your email for login to our services. We may use your contact
              information to send you information about our Services, to market
              to you, to help prevent spam, fraud, or abuse, and to help others
              find your account, including through third-party services and
              client applications.
              <br />
              <br />
              <b>Post and Comment Information</b> : Garuda Pro is primarily designed
              to help digitalize learning process in school. Besides that we
              also facilities teacher and student from various school in
              Indonesia to share information each other with Communities
              feature. Most of the information you provide us through Garuda Pro
              is information you are asking us to make public. You may provide
              us with profile information such as a fullname, school, and
              picture. Additionally, your public information includes the
              information you publish; the metadata provided with Communities,
              such as when you publish post; information about your account,
              such as name, school, and profile picture. Garuda pro broadly and
              instantly disseminates your public information to a wide range of
              users especially in Indonesia, customers, and services,
              developers, and publishers that integrate Garuda pro content into
              their services. When you share information or content like photos,
              videos, and links, you should think carefully
              about what you are making public. You have to consent the impact
              of your content to viewers. We prohibit you to publish objectionable content. Some examples of objectionable content include:
              <ul>
                <li>1. <b>Defamatory commentary and hate speech</b> about religion, gender, race and other targeted groups</li>
                <li>2. <b>Overly sexual material</b> of an explicit nature</li>
                <li>3. Portrayals of extreme <b>violence</b> or content that encourages violence</li>
                <li>4. <b>Bullying and harassment</b>, and</li>
                <li>5. <b>Illegal activities</b> such as drug use and gambling</li>
              </ul> If we are found that your content has included some of points that we have mentioned, we will remove your content and not impossible your account too in the future. Also for the viewers that found your content is included some of points too, they can report through the application and we will verify the reports. If the report is valid we will doing same thing like we explain before.

              <br />
              <br />
              <b>Location Information</b> : We need information about your
              location especially for attendance feature. We will verify your
              attendance with your location, if your location is still in the
              tolerance range from your school it means your attendance is
              valid. Event tough we get your location, we don't collect your
              location information. We only verify your location in frontend in
              this case is mobile application and not store them in our storage.
              We determine your location by using other data from your device,
              such as precise location information from GPS, information about
              wireless networks or cell towers near your mobile device, or your
              IP address.
              <br />
              <br />
              <b>Face Data Information</b> : We need information about your face for
              attendance feature too. After location is valid we will verify the
              attendance with camera. If there is a face detected in the picture
              captured by camera we will verify the attendance. We only detect
              existence of face in picture not check the similarity of face
              detected. The picture is to help the teacher and school to ensure
              that student attendance is valid. Your face data existence in our storage is depend on your school. it can only one semester, one academic year, or more it totally depends on your school. And important thing to note, we don't share your face data to any other third parties. Parties that have possibility access your face data is us as super admin, your admin school, your teacher, and yourself.
            </p>
            <h2 className='mt-7'>Consent</h2>
            <p className='mt-2 text-sm text-gray-800'>
              By using our services, you hereby consent to our Privacy Policy
              and agree to its Terms and Conditions.
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
