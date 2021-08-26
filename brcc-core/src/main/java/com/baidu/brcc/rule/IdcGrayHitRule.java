package com.baidu.brcc.rule;

import org.springframework.stereotype.Component;

import java.util.Map;

import static org.apache.commons.lang3.StringUtils.trim;

@Component("idc")
public class IdcGrayHitRule implements GrayHitRule {
    @Override
    public boolean hit(Long grayVersionId, String ruleContent, Map<String, String> content) {
        // idc判断
        String idc = content.get("idc");
        String[] spilt = ruleContent.split(",");
        for (String item : spilt) {
            if (idc.equals(trim(item))) {
                return true;
            }
        }
            return false;
        }
    }

