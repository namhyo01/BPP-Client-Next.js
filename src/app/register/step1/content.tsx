'use client';

import '../style.css';
import Navbar from '@/component/navigationBar';
import ContentBox from '@/component/contentBox';
import Image from 'next/image';
import addcheck from 'public/addcheck.svg';
import addcheck_true from 'public/addcheck_true.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home({
  setValues,
  prevStep,
  nextStep,
}: {
  setValues: () => void;
  prevStep: () => void;
  nextStep: () => void;
}): any {
  const [checkBox_1, setCheckBox_1] = useState(false);
  const [checkBox_2, setCheckBox_2] = useState(false);
  const [checkBox_3, setCheckBox_3] = useState(false);
  const [nextBtnAvailable, setNextBtnAvailable] = useState(false);
  useEffect(() => {
    if (checkBox_1 && checkBox_2 && checkBox_3) {
      setNextBtnAvailable(true);
    } else {
      setNextBtnAvailable(false);
    }
  }, [checkBox_1, checkBox_2, checkBox_3]);
  const router = useRouter();
  return (
    <>
      <Navbar back=" ">회원가입</Navbar>
      <ContentBox>
        <div
          style={{
            marginTop: '20px',
            marginLeft: '20px',
            float: 'left',
            background: '#8638EA',
            width: '31px',
            height: '31px',
            borderRadius: '31px',
            color: '#fff',
            lineHeight: '31px',
            textAlign: 'center',
            fontSize: '14px',
            marginRight: '10px',
          }}
        >
          1
        </div>
        <div
          style={{
            marginTop: '20px',
            float: 'left',
            background: '#F0F0F2',
            width: '31px',
            height: '31px',
            borderRadius: '31px',
            color: '#A8A8A8',
            lineHeight: '31px',
            textAlign: 'center',
            fontSize: '14px',
            marginRight: '10px',
          }}
        >
          2
        </div>
        <div
          style={{
            marginTop: '20px',
            float: 'left',
            background: '#F0F0F2',
            width: '31px',
            height: '31px',
            borderRadius: '31px',
            color: '#A8A8A8',
            lineHeight: '31px',
            textAlign: 'center',
            fontSize: '14px',
            marginRight: '10px',
          }}
        >
          3
        </div>
        <div
          style={{
            marginBottom: '10px',
            marginLeft: '20px',
            color: '#212121',
            fontSize: '22px',
            width: '100%',
            position: 'relative',
            display: 'inline-block',
            fontWeight: 'bold',
            lineHeight: '60px',
            height: '60px',
          }}
        >
          약관동의
        </div>
        <div
          style={{
            marginLeft: '20px',
            color: '#212121',
            fontSize: '18px',
            width: 'calc(100% - 40px)',
            position: 'relative',
            display: 'inline-block',
            fontWeight: 'bold',
            lineHeight: '50px',
            height: '50px',
          }}
        >
          모두 동의합니다
          <Image
            onClick={() => {
              if (nextBtnAvailable) {
                setCheckBox_1(false);
                setCheckBox_2(false);
                setCheckBox_3(false);
              } else {
                setCheckBox_1(true);
                setCheckBox_2(true);
                setCheckBox_3(true);
              }
            }}
            src={nextBtnAvailable ? addcheck_true : addcheck}
            style={{ float: 'right', marginTop: '12px' }}
            alt="check"
          />
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            marginLeft: '20px',
            color: '#212121',
            fontSize: '14px',
            width: 'calc(100% - 40px)',
            position: 'relative',
            display: 'inline-block',
            lineHeight: '22px',
            height: '150px',
            border: 'solid 1px #EEEEF0',
            padding: '16px',
            marginBottom: '15px',
          }}
        >
          <div style={{ color: '#FF5F49', fontSize: '16px', float: 'left' }}>
            필수
          </div>
          <div
            style={{
              fontWeight: 'bold',
              marginLeft: '6px',
              color: '#212121',
              fontSize: '16px',
              float: 'left',
            }}
          >
            이용약관
          </div>
          <Image
            onClick={() => {
              setCheckBox_1(!checkBox_1);
            }}
            src={checkBox_1 ? addcheck_true : addcheck}
            style={{ float: 'right', marginTop: '-2px' }}
            alt="check"
          />
          <textarea
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              marginLeft: '6px',
              color: '#737373',
              fontSize: '13px',
              width: '100%',
              border: 'none',
              margin: '0',
              marginTop: '10px',
              padding: '0',
              resize: 'none',
              height: '86px',
              lineHeight: '19.5px',
            }}
          >
            {'여러분을 환영합니다. \n' +
              "네이버 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 '회사')"}
          </textarea>
        </div>

        <div
          style={{
            boxSizing: 'border-box',
            marginLeft: '20px',
            color: '#212121',
            fontSize: '14px',
            width: 'calc(100% - 40px)',
            position: 'relative',
            display: 'inline-block',
            lineHeight: '22px',
            height: '150px',
            border: 'solid 1px #EEEEF0',
            padding: '16px',
            marginBottom: '15px',
          }}
        >
          <div style={{ color: '#FF5F49', fontSize: '16px', float: 'left' }}>
            필수
          </div>
          <div
            style={{
              fontWeight: 'bold',
              marginLeft: '6px',
              color: '#212121',
              fontSize: '16px',
              float: 'left',
            }}
          >
            이용약관
          </div>
          <Image
            onClick={() => {
              setCheckBox_2(!checkBox_2);
            }}
            src={checkBox_2 ? addcheck_true : addcheck}
            style={{ float: 'right', marginTop: '-2px' }}
            alt="check"
          />
          <textarea
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              marginLeft: '6px',
              color: '#737373',
              fontSize: '13px',
              width: '100%',
              border: 'none',
              margin: '0',
              marginTop: '10px',
              padding: '0',
              resize: 'none',
              height: '86px',
              lineHeight: '19.5px',
            }}
          >
            {'여러분을 환영합니다. \n' +
              "네이버 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 '회사')"}
          </textarea>
        </div>

        <div
          style={{
            boxSizing: 'border-box',
            marginLeft: '20px',
            color: '#212121',
            fontSize: '14px',
            width: 'calc(100% - 40px)',
            position: 'relative',
            display: 'inline-block',
            lineHeight: '22px',
            height: '150px',
            border: 'solid 1px #EEEEF0',
            padding: '16px',
            marginBottom: '15px',
          }}
        >
          <div style={{ color: '#FF5F49', fontSize: '16px', float: 'left' }}>
            필수
          </div>
          <div
            style={{
              fontWeight: 'bold',
              marginLeft: '6px',
              color: '#212121',
              fontSize: '16px',
              float: 'left',
            }}
          >
            이용약관
          </div>
          <Image
            onClick={() => {
              setCheckBox_3(!checkBox_3);
            }}
            src={checkBox_3 ? addcheck_true : addcheck}
            style={{ float: 'right', marginTop: '-2px' }}
            alt="check"
          />
          <textarea
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              marginLeft: '6px',
              color: '#737373',
              fontSize: '13px',
              width: '100%',
              border: 'none',
              margin: '0',
              marginTop: '10px',
              padding: '0',
              resize: 'none',
              height: '86px',
              lineHeight: '19.5px',
            }}
          >
            {'여러분을 환영합니다. \n' +
              "네이버 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 '회사')"}
          </textarea>
        </div>
        <div style={{ width: '100%', height: '100px' }} />
      </ContentBox>
      <button
        onClick={() => {
          if (nextBtnAvailable) {
            nextStep();
            //router.push('step2');
          }
        }}
        style={{
          boxSizing: 'border-box',
          bottom: '20px',
          marginLeft: '20px',
          position: 'absolute',
          height: '52px',
          width: 'calc(100% - 40px)',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: nextBtnAvailable ? '#8638EA' : '#D2D2D1',
          color: '#fff',
          fontSize: '16px',
        }}
      >
        다음
      </button>
    </>
  );
}
