Ext.define('HitDStreet.view.feed.FeedCntrl', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.feedcntrl',




    feedurl: function(a) {

        var t = a.getProxy();
        console.log(HitDStreet.user.response.user._id);
        t.setUrl('http://172.29.18.140:8080/hds/feedLoad/' + HitDStreet.user.response.user._id)
        this.getViewModel().getStore('feed').load();
    },


    display: function(me, records, successful, operation, eOpts) {
        console.log(records);

        var storenames = records[0].data.response.storeDetails;
        var d = records[0].data.response.feedLoad;
        var centerreg = this.getView().down('#feed');



        var viewModel = this.getView().getViewModel();
        var i;
        for (i = 0; i < d.length; i++) {

            var rec = d[i];
            var content = Ext.create('HitDStreet.view.feed.BaseFeed', {

                //html:rec.data.html

            });


            //content.down('#dp').setSrc(rec.data.dpic);
            content.down('#big').setSrc(rec.photo);
            content.down('#heading').setText(rec.name);
            content.down('#desc').setText(rec.offers.description);
            for (var j = 0; j < storenames.length; j++) {
                var obj = storenames[j];
                if (rec.shop_id == obj.store_id) {

                    content.down('#store').setText(obj.store_name);
                }

            }
            centerreg.add(content);
        }

    },




    category: function(a, b) {

        this.getView().inter = b[0].data.response;
        console.log(this.getView().inter);

    },


    getCategory: function(button) {
        //console.log(me);
        var self = this;
        this.getViewModel().getStore('category').load();
        var s = this.getViewModel().getStore('category');
        var g = s.data.items[0].data.response;


        var categorybox = this.getView().window = Ext.create('Ext.window.Window', {
            title: 'Select Category',
            height: 300,
            width: 300,
            modal: true,
            padding: 5,

            itemId: 'catwindow',
            items: [{
                xtype: 'form',
                defaultType: 'checkboxfield',
                name: 'category',
                items: []

            }],


            buttons: [{
                text: 'Done',
                handler: function(button) {
                    debugger;
                    console.log(button.up('window').down('form').getForm().getValues());
                    var i = button.up('window').down('form').getForm().getValues().undefined;
                    button.up('window').close();
                    self.getViewModel().getStore('feed').getProxy().setUrl('http://172.29.18.140:8080/hds/feedLoad/' + t);
                    self.getViewModel().getStore('feed').load();


                }
            }]
        });

        g.forEach(function(rec) {
            console.log(rec);
            categorybox.down('form').add({
                'boxLabel': rec.category_name,
                'inputValue': rec._id
            })
        });
        this.getView().window.show();

    },

    setHead: function(store) {

        var f = HitDStreet.user.token;
        //store.getProxy().setHeaders({'token':f,'Content-Type':'application/json'});

    },

    check: function(a, b) {


    },
    logout: function() {
        window.location.href = window.location.href;
    },
    storecreate: function(parentButton) {
        var me = this;
        var record = Ext.create('HitDStreet.view.shop.ShopModel');
        var w = Ext.create('Ext.window.Window', {
            height: 350,
            width: 400,

            buttons: [{

                text: 'create',

                handler: function(childButton) {
                    me.storedone(childButton, record, parentButton);
                }
            }]

        });
        w.add(Ext.create('HitDStreet.view.shop.Shop'))
        w.show();

        w.down('form').loadRecord(record);

    },

    storedone: function(childButton, record, parentButton) {

        childButton.up('window').down('form').updateRecord(record);
        console.log(HitDStreet.user.response.user._id);
        record.data.owner_id = HitDStreet.user.response.user._id;
        record.save();
        console.log(record.data);

        childButton.up('window').close();
        Ext.toast('you have created store successfully');


        if (!this.getView().down('#buttonbox').down('label')) {
            var storehead = Ext.create('Ext.form.Label', {


                    text: 'My stores',
                    margin: 5,
                    style: {
                        "font-size": "16px",
                        "font-weight": "bold",
                        "font-align": "center",
                        "color": "white"

                    }
                }

            );
        }
        var v = record.data.store_name;
        var storebutton = Ext.create('Ext.button.Button', {
            margin: 5,

            cls: 'buttonlogout',
            html: v,
            handler: 'category'
        });
        this.getView().down('#buttonbox').add(storebutton);

    },
    product: function(a, b) {
        var me = this;
        this.getView().down('#feed').removeAll();
        var k = b[0].data.response;
        k.forEach(function(v) {
            var j = Ext.create('HitDStreet.view.product.ProductContainer');

            j.down('image').setSrc(v.photo);
            j.down('#description').setText(v.offers.description);
            me.getView().down('#feed').add(j);
        });
        console.log(b);

    },
    productclick: function(b) {


        this.getViewModel().getStore('product').getProxy().getApi().read = 'http://172.29.18.140:8080/hds/getProducts/' + b.buttonId;

        this.getViewModel().getStore('product').load();
    },

	enterpress:function(field, e){
					
                    if (e.getKey() == e.ENTER) {
						
                        this.getView().down('#send').click();
                    }
                },

    addMessage: function(args, payload) {
        var chatId;
        val = Ext.getCmp('message').getValue();
        if (val) {
            Ext.getCmp('message-box').add({
                xtype: 'container',
                layout: {
                    type: 'hbox',

                    align: 'right',
                    pack: 'end'
                },
                width: '100%',

                items: [{
                    xtype: 'container',
                    cls: 'message message-personal',

                    items: [{
                        xtype: 'label',

                        html: '<div>' + val + '</div>'
                    }]
                }]
            });
            Ext.getCmp('message').setValue(null);

            const client = new ApiAi.ApiAiClient({
                accessToken: '78dbef8d0f9e48f1bbb2646f7d563a3c',
                sessionId: "HDS"
            });
            if (args) {
                console.log(val);
                var promise = client.textRequest(val, {
                    sessionId: client.getSessionId()
                });
                promise
                    .then(handleResponse)
                    .catch(handleError);

            } else {

                var promise = client.textRequest(payload, {
                    sessionId: client.getSessionId()
                });
                promise
                    .then(handleResponse)
                    .catch(handleError);
            }




            function handleResponse(serverResponse) {
                console.log(serverResponse);


                Ext.Ajax.request({
                    url: 'http://172.29.18.140:8080/hds/bot',
                    method: 'POST',
                    cors: 'true',
                    jsonData: Ext.encode(serverResponse),
                    callback: function(req, success, response) {
                        console.log(response);
                        var res = Ext.decode(response.responseText);
                        textGeneration(res);

                    }
                });

                function textGeneration(response) {
                    var speech = response.response.text;
                    console.log(speech);

                    Ext.getCmp('message-box').add({
                        xtype: 'container',

                        items: [{
                            xtype: 'label',
							margin:'0 3 0 0',
                            html: '<div class="message message-new">' + speech + '</div>',

                        }]
                    });
                    var buttons = response.response.buttons;
                    if (buttons) {
                        var n = Ext.create('HitDStreet.view.bot.OptionalPanel');
                        for (var i = 0; i < buttons.length; i++) {
                            var obj;
                            console.log(buttons[i])
                            var t = Ext.create('Ext.button.Button', {
                                handler: 'postbackFunction',
                                cls:'.x-btn-inner-default-small-i',
								style:{
									//color:'#F1F1F1'
								}
                            });


                            t.setText(buttons[i]);
                            n.add(t, {
                                padding: 2
                            });
                        }
                        Ext.getCmp('message-box').add(n);

                    }

                }




            }




            function handleError(serverError) {
                console.log(serverError);
            }


        }


    },
    postbackFunction: function(arguments) {
        view = Ext.getCmp('mainview');
        inputField = Ext.getCmp('message').setValue(arguments.text);
		this.getView().down('#send').click();
        //view.getController().addMessage(null,arguments.payload);
    }


});