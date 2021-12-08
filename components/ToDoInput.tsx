export const ToDoInput = () => {
  return (
    <div className='todo-input'>
      <form action="">
        <div className='todo-input__fields'>
          <div className='todo-input__field'>
            <div className='text'>Имя</div>
            <input type="text" />
          </div>
          <div className='todo-input__field'>
            <div className='text'>Телефон</div>
            <input type="text" />
          </div>
        </div>
        <div className='todo-input__fields'>
          <div className='todo-input__field textarea'>
            <div className='text'>Заметка</div>
            <textarea className='textarea' />
          </div>
            <button className='todo-input__btn btn'>
              <img src="success.svg" alt=""/>
            </button>
        </div>
      </form>
    </div>
  )
}
