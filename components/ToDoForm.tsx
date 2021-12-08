import { NextPage } from "next";

export const ToDoForm: NextPage = () => {
  const test = [
    {
      id: 1,
      title: 'Artem',
      phone: '9999999999',
      text: 'awdawd awdaw9  9uaw awhy  awd oijiuh oi7gi86giog iyog86g oiuguygy WD AWDAWDA'
    },
    {
      id: 2,
      title: 'Artem',
      phone: '9999999999',
      text: 'awdawd awdaw9  9uaw awhy  awd oijiuh oi7gi86giog iyog86g oiuguygy WD AWDAWDA'
    }
  ]
  return (
    <div className='todo-form'>
      {test && test.map(item => {
        return (
          <div key={item.id} className='todo-form__item'>
            <div className='name'>{item.title}</div>
            <div className='phone'>{item.phone}</div>
            <div className='text'>{item.text}</div>
            <div className='todo-form__btn-block'>
              <button className='todo-form__btn-delete btn'>X</button>
              <button className='todo-form__btn-pen btn'>
                <img src='pen.svg' alt=''/>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
