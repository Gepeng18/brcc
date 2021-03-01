/*
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.baidu.brcc.controller;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.anyLong;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.baidu.brcc.domain.ApiToken;
import com.baidu.brcc.domain.Project;
import com.baidu.brcc.domain.base.R;
import com.baidu.brcc.domain.vo.ApiBatchItemReqVo;
import com.baidu.brcc.domain.vo.ApiItemVo;
import com.baidu.brcc.service.ApiTokenCacheService;
import com.baidu.brcc.service.ConfigItemService;
import com.baidu.brcc.service.RccCache;

public class ApiConfigItemControllerTest {
    @Mock
    ApiTokenCacheService apiTokenCacheService;
    @Mock
    ConfigItemService configItemService;
    @Mock
    RccCache rccCache;
    @InjectMocks
    ApiConfigItemController apiConfigItemController;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        ApiToken apiToken = new ApiToken();
        apiToken.setProjectId(1L);
        when(apiTokenCacheService.getApiToken(any())).thenReturn(apiToken);
        Project project = new Project();
        project.setId(1L);
        project.setApiPassword("5f4dcc3b5aa765d61d8327deb882cf99");
        when(rccCache.getProject(anyString())).thenReturn(project);

    }

    @Test
    public void testGetItem() throws Exception {
        when(configItemService.getByVersionIdAndName(anyLong(), anyLong(), anyString())).thenReturn(new ApiItemVo());

        R<ApiItemVo> result = apiConfigItemController.getItem("token", Long.valueOf(1), "name");
        Assert.assertEquals(0, result.getStatus());
    }

    @Test
    public void testGetAllItem() throws Exception {
        when(apiTokenCacheService.getApiToken(anyString())).thenReturn(new ApiToken());
        when(configItemService.getAllByVersionIdInCache(any(), any()))
                .thenReturn(Arrays.<ApiItemVo>asList(new ApiItemVo()));

        R<List<ApiItemVo>> result = apiConfigItemController.getAllItem("token", Long.valueOf(1));
        Assert.assertEquals(0, result.getStatus());
    }

    @Test
    public void testGetBatchItem() throws Exception {
        when(apiTokenCacheService.getApiToken(anyString())).thenReturn(new ApiToken());
        when(configItemService.getItemsByVersionIdAndNamesInCache(any(), any(), any())).thenReturn(
                Arrays.<ApiItemVo>asList(new ApiItemVo()));

        ApiBatchItemReqVo apiBatchItemReqVo = new ApiBatchItemReqVo();

        apiBatchItemReqVo.setVersionId(1L);

        R<List<ApiItemVo>> result = apiConfigItemController.getBatchItem("token", apiBatchItemReqVo);
        Assert.assertEquals(0, result.getStatus());
    }
}
