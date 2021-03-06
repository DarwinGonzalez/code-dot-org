import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import color from "../../../util/color";
import StageExtrasProgressBubble from '@cdo/apps/templates/progress/StageExtrasProgressBubble';
import StageTrophyProgressBubble from '@cdo/apps/templates/progress/StageTrophyProgressBubble';
import { levelsForLessonId, stageExtrasUrl, getPercentPerfect } from '@cdo/apps/code-studio/progressRedux';
import ProgressBubble from '@cdo/apps/templates/progress/ProgressBubble';
import { levelType } from '@cdo/apps/templates/progress/progressTypes';

const styles = {
  headerContainer: {
    // With our new bubble we don't want any padding above/below
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: color.lightest_gray,
    border: `1px solid ${color.lighter_gray}`,
    borderRadius: 5,
    height: 40,
    marginLeft: 4,
    marginRight: 4,
  },
  stageTrophyContainer: {
    border: 0,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 0,
  },
  pillContainer: {
    // Vertical padding is so that this lines up with other bubbles
    paddingTop: 4,
    paddingBottom: 4,
  }
};

/**
 * Stage progress component used in level header and course overview.
 */
const StageProgress = React.createClass({
  propTypes: {
    // redux provided
    levels: PropTypes.arrayOf(levelType).isRequired,
    stageExtrasUrl: PropTypes.string,
    onStageExtras: PropTypes.bool,
    stageTrophyEnabled: PropTypes.bool,
  },

  render() {
    const { levels, stageExtrasUrl, onStageExtras, stageTrophyEnabled } = this.props;

    return (
      <div
        className="react_stage"
        style={{
          ...styles.headerContainer,
          ...(stageTrophyEnabled && styles.stageTrophyContainer),
        }}
      >
        {levels.map((level, index) =>
          <div
            key={index}
            style={{
              ...(level.isUnplugged && level.isCurrentLevel && styles.pillContainer)
            }}
          >
            <ProgressBubble
              level={level}
              disabled={false}
              smallBubble={!level.isCurrentLevel}
            />
          </div>
        )}
        {stageExtrasUrl &&
          <StageExtrasProgressBubble
            stageExtrasUrl={stageExtrasUrl}
            onStageExtras={onStageExtras}
          />
        }
        {stageTrophyEnabled &&
          <StageTrophyProgressBubble
            percentPerfect={getPercentPerfect(levels)}
          />
        }
      </div>
    );
  }
});

export const UnconnectedStageProgress = StageProgress;

export default connect(state => ({
  levels: levelsForLessonId(state.progress, state.progress.currentStageId),
  stageExtrasUrl: stageExtrasUrl(state.progress, state.progress.currentStageId),
  onStageExtras: state.progress.currentLevelId === 'stage_extras',
  stageTrophyEnabled: state.progress.stageTrophyEnabled,
}))(StageProgress);
