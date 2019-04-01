const TodoList = artifacts.require("TodoList");

contract('TodoList', (accounts)=> {
	before(async()=> {
		this.TodoList = await TodoList.deployed()
	})

	it('deploys succesfullly', async()=> {
		const address = await this.TodoList.address
		assert.notEqual(address, 0x0)
		assert.notEqual(address, '')
		assert.notEqual(address, null)
		assert.notEqual(address, undefined)
	})

	it('lists taks', async () => {
		const taskCount = await this.TodoList.taskCount()
		const task = await this.TodoList.tasks(taskCount)
		assert.equal(task.id.toNumber(), taskCount.toNumber())
	})


	it('lists tasks', async () => {
    	const taskCount = await this.TodoList.taskCount()
	    const task = await this.TodoList.tasks(taskCount)
	    assert.equal(task.id.toNumber(), taskCount.toNumber())
	    assert.equal(task.content, 'acabar este tutorial')
	    assert.equal(task.completed, false)
	    assert.equal(taskCount.toNumber(), 1)
  })

})