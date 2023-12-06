function getPriorityRadioOptions({ todo }) {
  const options = [
    {
      value: 1,
      text: 'Low',
      checked: false
    },
    {
      value: 2,
      text: 'Medium',
      checked: false
    },
    {
      value: 3,
      text: 'High',
      checked: false
    }
  ]

  return options.map(option => {
    if (option.value === todo.taskPriority) {
      option.checked = true
    }
    return option
  })
}

export function taskPriorityViewModel(baseUrl, session) {
    return {
        backLinkUrl: `${baseUrl}/task-content`,
        pageHeading: 'Select priority level',
        priorityRadioOptions: getPriorityRadioOptions(session)
    }
}   