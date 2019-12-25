import React, { FC } from 'react';
import View from '../../components/View';
import Button from '../../components/Button';
import NoteCard from '../../components/NoteCard';
import Grid from '../../components/Grid';

const HomeContainer: FC = () => (
  <View>
    <Grid>
      <Grid.Row>
        <Grid.Column medium={3}>
          <NoteCard>BLA BLA</NoteCard>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </View>
);

export default HomeContainer;
