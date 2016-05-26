package com.dianrong.common.auth.server.data.mapperAdapter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dianrong.common.auth.server.data.entity.SlSequence;
import com.dianrong.common.auth.server.data.entity.SlSequenceExample;
import com.dianrong.common.auth.server.data.mapper.SlSequenceMapper;

public class SlSequenceMapperAdapter extends BaseMapperAdapter{
	
	/**.
	 * 访问SL$SEQUENCE表的mapper
	 */
	@Autowired
	private SlSequenceMapper slSequenceMapper;
	
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SL$SEQUENCE
     *
     * @mbggenerated Thu May 05 10:43:21 CST 2016
     */
    public int insert(SlSequence record) {
    	return slSequenceMapper.insert(record);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SL$SEQUENCE
     *
     * @mbggenerated Thu May 05 10:43:21 CST 2016
     */
    public List<SlSequence> selectByExample(SlSequenceExample example) {
    	return slSequenceMapper.selectByExample(example);
    }

    /**.
     * 新加的特殊方法，用于更新cnt的值
     * @param record record
     * @return 影响行数
     */
    public int updateCntByNameAndCnt(SlSequence record) {
    	 return slSequenceMapper.updateCntByNameAndCnt(record);
    }
}