import { ValidationText } from "@pages/Form";
import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup
    .string()
    .min(6, '영문 소문자/숫자를 이용하여 6자리 이상 13자리 이하')
    .max(13, '영문 소문자/숫자를 이용하여 6자리 이상 13자리 이하')
    .matches(
      /^(?=.*\d)(?=.*[a-z])/,
      '영문 소문자/숫자를 이용하여 6자리 이상 13자리 이하'),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  pwd: yup
    .string()
    .min(8, '영문자/특수문자/숫자를 포함하여 8자리 이상 16자리 이하')
    .max(16, '영문자/특수문자/숫자를 포함하여 8자리 이상 16자리 이하')
    .matches(
      /^(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-])(?=.*\d)/,
      '영문자/특수문자/숫자를 포함하여 8자리 이상 16자리 이하'),
  email: yup
      .string()
      .matches(
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
        "정확한 이메일을 입력해주세요"),
  nickname: yup
        .string()
        .min(2, '한글/영어/숫자로 2자리 이상 16자리 이하')
        .max(16, '한글/영어/숫자로 2자리 이상 16자리 이하')
        .matches(
          /^[ㄱ-힣a-zA-z0-9]/,
          '한글/영어/숫자로 2자리 이상 16자리 이하'
        ),
  // ^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$
  // /^(?=.*[a-z0-9])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]$/
    // .matches(/^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W))/, "영문자/특수문자/숫자를 포함하여 8자리 이상 16자리 이하")
    
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  // email: yup
  //   .string()
  //   .email("정확한 이메일을 입력해주세요")
  //   .required(),
})
