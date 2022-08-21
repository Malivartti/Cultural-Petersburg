import React, { useState, useContext } from 'react'
import { AppNavigation } from '../../../context'
import { Panel, PanelHeader, PanelHeaderBack, View, FormLayout, FormItem, Textarea, Input } from '@vkontakte/vkui'
import MyButton from '../../../Components/UI/MyButton/MyButton';
import ICONS from '../../../img/icons'
import MyInputFile from '../../../Components/UI/MyInputFile/MyInputFile';

const CreateChallenge = ({ id }) => {
  const { setActiveView } = useContext(AppNavigation);
  const [name, setName] = useState('')
  const [descr, setDescr] = useState('')
  const [address, setAddress] = useState('')

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView('main')} />} separator={false}>Создать вызов</PanelHeader>

        <FormLayout>
          <FormItem>
            <MyInputFile />
          </FormItem>
          <FormItem top="Название">
            <Input
              type="text"
              placeholder="Введите название"
              value={name}
              onChange={e => setName(e.target.name)}
            />
          </FormItem>
          <FormItem top="">
            <Textarea
              placeholder="Введите описание"
              value={descr}
              onChange={e => setDescr(e.target.name)}
            />
          </FormItem>
          <FormItem top="Местоположение">
            <Input
              type="text"
              placeholder="Введите адрес"
              value={address}
              onChange={e => setAddress(e.target.name)}
              after={<ICONS.location />}
            />
          </FormItem>
          <FormItem style={{display: "flex"}}>
            <MyButton>Отправить{<ICONS.arrowRight />}</MyButton>
          </FormItem>
        </FormLayout>
      </Panel>
    </View>
  )
}

export default CreateChallenge