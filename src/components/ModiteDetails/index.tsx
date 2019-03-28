import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon, IonBadge } from '@ionic/react';
import { defaultModite } from '../../models/Modite';
import ModiteDetailsProps from '../../models/ModiteDetailsProps';
import s from './styles.module.css';

const MapComponent = lazy(() =>
  import('../MapComponent' /* webpackChunkName: "maps", webpackPrefetch: true  */),
);

function ModiteDetails({ modite = defaultModite }: ModiteDetailsProps) {
  return (
    <>
      <div className={s.detailsMapCt}>
        <MapComponent modites={modite} />
        <Link to="/">
          <IonIcon name="close-circle" class={s.closeIcon} />
        </Link>
      </div>

      <div className={s.detailsCt}>
        <div className={s.imageCt}>
          <div className={s.imageWrap}>
            <img src={modite.profile.image_192} />
            {modite.tacos !== undefined && (
              <IonBadge class={s.tacosBadge}>🌮 {modite.tacos}</IonBadge>
            )}
          </div>
        </div>
        <div className={s.detailsWrap}>
          <div className={s.detailsTitle}>{modite.real_name}</div>
          <div>
            {modite.profile.fields && modite.profile.fields.Location}
          </div>
          <div>
            {modite.localDate} {modite.localTime}
          </div>
          <div>{modite.profile.fields && modite.profile.fields['Title']}</div>
          <div>{modite.profile.fields && modite.profile.fields['GitHub User']}</div>
          <hr />
          <div>{modite.profile.title}</div>
        </div>
      </div>
    </>
  );
}

export default ModiteDetails;