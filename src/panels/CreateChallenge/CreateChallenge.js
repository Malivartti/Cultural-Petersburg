import React, { useState, useContext } from 'react'
import { AppNavigation } from '../../context'
import { Panel, PanelHeader, PanelHeaderBack, View, FormLayout, FormItem, Textarea, Input, Group } from '@vkontakte/vkui'
import MyButton from '../../Components/UI/MyButton/MyButton';
import ICONS from '../../img/icons'
import MyInputFile from '../../Components/UI/MyInputFile/MyInputFile';
import { specialCharactersValidator } from '../../utils/validator';
import { geocoder } from '../../api/cards';

const CreateChallenge = ({ id }) => {
  const { setActiveStory } = useContext(AppNavigation);
  const [file, setFile] = useState({ value: "", error: "" })
  const [name, setName] = useState({ value: "", error: "" })
  const [descr, setDescr] = useState({ value: "", error: "" })
  const [address, setAddress] = useState({ value: "", error: "" })

  function onChangeFile(value) {
    setFile({ value, error: "" })
  }

  function onChangeName(e) {
    const value = e.target.value
    if (value.length < 5) {
      setName({ value, error: "Название слишком короткое" })
    } else if (specialCharactersValidator(value)) {
      setName({ value, error: "Название не должно иметь спецсимволы" })
    } else {
      setName({ value, error: "" })
    }
  }

  function onChangeDescr(e) {
    const value = e.target.value
    if (value.length < 50) {
      setDescr({ value, error: "Описание должно иметь минимум 50 символов" })
    } else {
      setDescr({ value, error: "" })
    }
  }

  async function onChangeAddress(e) {
    const value = e.target.value
    const check = await geocoder(value)[0]
    if (!check) {
      setAddress({value, error: "Введите верный адрес"})
    } else {
      setAddress({ value, error: "" })
    }
  }

  function toAccept() {
    if (!file.value) setFile({ value: "", error: "Заполните поле" })
    if (!name.value) setName({ value: "", error: "Заполните поле" })
    if (!descr.value) setDescr({ value: "", error: "Заполните поле" })
    if (!address.value) setAddress({ value: "", error: "Заполните поле" })

    if ((!file.error && file.value) && (!name.error && name.value) && (!descr.error && descr.value) && (!address.error && address.value)) {
      console.log('accepted')
    }
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader before={<PanelHeaderBack onClick={() => setActiveStory('challenges')} />} separator={false}>Создать вызов</PanelHeader>
        <Group>
          <FormLayout>
            <FormItem
              top="Обложка"
              status={file.error ? "error" : "valid"}
              bottom={file.error}
            >
              <MyInputFile onChange={onChangeFile} />
            </FormItem>
            <FormItem
              top="Название"
              status={name.error ? "error" : "valid"}
              bottom={name.error}
            >
              <Input
                type="text"
                placeholder="Введите название"
                value={name.value}
                onChange={onChangeName}
              />
            </FormItem>
            <FormItem
              top="Описание"
              status={descr.error ? "error" : "valid"}
              bottom={descr.error}
            >
              <Textarea
                placeholder="Введите описание"
                value={descr.value}
                onChange={onChangeDescr}
              />
            </FormItem>
            <FormItem
              top="Местоположение"
              status={address.error ? "error" : "valid"}
              bottom={address.error}
            >
              <Input
                type="text"
                placeholder="Введите адрес"
                value={address.value}
                onChange={onChangeAddress}
                after={<ICONS.location />}
              />
            </FormItem>
            <FormItem style={{ display: "flex" }}>
              <MyButton onClick={toAccept}>Отправить{<ICONS.arrowRight />}</MyButton>
            </FormItem>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  )
}

export default CreateChallenge