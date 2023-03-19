import React from 'react';
import person from '../../images/person.svg';
import threedot from '../../images/threedot.svg';

export default function Profile() {
  return (
    <div>
      <img src={threedot} alt="profile pic" />
      <img src={person} alt="profile pic" />
    </div>
  );
}
