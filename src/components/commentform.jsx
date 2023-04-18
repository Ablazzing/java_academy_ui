import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'

export const CommentForm = ({ id, update }) => {
  
  const router = useRouter()
  const loading = useRef(null)
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      text: '',
      videoName: '',
      baseCommentId: id
    },
    validationSchema: Yup.object().shape({
      text: Yup.string().required(messages.video.comment.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      values.videoName = router.query.lection
      loading.current = 'disabled'
      const action = id === null ? 'sendVideoComment' : 'sendAnswerVideoComment'
      const response = await appApi().comments[action](values)
      if(response) {
        resetForm()
        update(id !== null ? true : false)
        NotificationManager.success(messages.video.success.sendComment)
      } else {
        NotificationManager.error(messages.video.errors.sendComment)
      }
      loading.current = null
    }
  })
  
  return (
    <>
      <form onSubmit={ form.handleSubmit } className={loading.current ? 'disabled' : ''} action="">
        <fieldset>
          <textarea 
            onChange={ form.handleChange } 
            value={ form.values.text } 
            className={ form.errors.text ? 'error' : '' } 
            name="text" 
          />
          { form.errors.text && <span className="error">{ form.errors.text }</span> }
        </fieldset>
        <button className="btn st4" type="submit">Отправить</button>
      </form>
      <NotificationContainer />
    </>
  )
}