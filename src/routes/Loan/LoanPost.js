import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col } from 'antd';
import { routerRedux } from 'dva/router';
import Result from '../../../components/Result';
import styles from './style.less';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../../components/Charts';

class Step3 extends React.PureComponent {
  render() {
    const { dispatch, data } = this.props;
    const onFinish = () => {
      dispatch(routerRedux.push('/form/step-form'));
    };
    const information = (
      <div>
        <ChartCard
          bordered={false}
          title="借款进度"

          total={82}
          footer={
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>

            </div>
          }
          contentHeight={46}
        >
          <MiniProgress percent={this.props.location.state.progress} strokeWidth={8} target={30} color="#13C2C2" />
        </ChartCard>
      <div className={styles.information}>

        <Row>
          <Col span={8} className={styles.label}>付款账户：</Col>
          <Col span={16}>{data.payAccount}</Col>
        </Row>

        <Row>
          <Col span={8} className={styles.label}>收款账户：</Col>
          <Col span={16}>{data.receiverAccount}</Col>
        </Row>
        <Row>
          <Col span={8} className={styles.label}>收款人姓名：</Col>
          <Col span={16}>{data.receiverName}</Col>
        </Row>
        <Row>
          <Col span={8} className={styles.label}>转账金额：</Col>
          <Col span={16}><span className={styles.money}>{data.amount}</span> 元</Col>
        </Row>
      </div>
      </div>
    );
    const actions = (
      <div>
        <Button type="primary" onClick={onFinish}>
          再转一笔
        </Button>
        <Button>
          查看账单
        </Button>
      </div>
    );
    return (
      <Result
        type="success"
        title="操作成功"
        description="预计两小时内到账"
        extra={information}
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default connect(({ form }) => ({
  data: form.step,
}))(Step3);
