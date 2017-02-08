import React from 'React'

const ShukiViewer = ({shukiList}) => (
  <div>This is the viewer
    <ul>
      {shukiList.map(shuki =>
        <li key={shuki.id}> {shuki.text} </li>
      )}
    </ul>
  </div>
)

export default ShukiViewer;