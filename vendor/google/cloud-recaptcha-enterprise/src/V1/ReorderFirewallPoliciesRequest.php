<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/recaptchaenterprise/v1/recaptchaenterprise.proto

namespace Google\Cloud\RecaptchaEnterprise\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The reorder firewall policies request message.
 *
 * Generated from protobuf message <code>google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest</code>
 */
class ReorderFirewallPoliciesRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. The name of the project to list the policies for, in the format
     * `projects/{project}`.
     *
     * Generated from protobuf field <code>string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     */
    private $parent = '';
    /**
     * Required. A list containing all policy names, in the new order. Each name
     * is in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     *
     * Generated from protobuf field <code>repeated string names = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     */
    private $names;

    /**
     * @param string   $parent Required. The name of the project to list the policies for, in the format
     *                         `projects/{project}`. Please see
     *                         {@see RecaptchaEnterpriseServiceClient::projectName()} for help formatting this field.
     * @param string[] $names  Required. A list containing all policy names, in the new order. Each name
     *                         is in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. Please see
     *                         {@see RecaptchaEnterpriseServiceClient::firewallPolicyName()} for help formatting this field.
     *
     * @return \Google\Cloud\RecaptchaEnterprise\V1\ReorderFirewallPoliciesRequest
     *
     * @experimental
     */
    public static function build(string $parent, array $names): self
    {
        return (new self())
            ->setParent($parent)
            ->setNames($names);
    }

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $parent
     *           Required. The name of the project to list the policies for, in the format
     *           `projects/{project}`.
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $names
     *           Required. A list containing all policy names, in the new order. Each name
     *           is in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Recaptchaenterprise\V1\Recaptchaenterprise::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. The name of the project to list the policies for, in the format
     * `projects/{project}`.
     *
     * Generated from protobuf field <code>string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @return string
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Required. The name of the project to list the policies for, in the format
     * `projects/{project}`.
     *
     * Generated from protobuf field <code>string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @param string $var
     * @return $this
     */
    public function setParent($var)
    {
        GPBUtil::checkString($var, True);
        $this->parent = $var;

        return $this;
    }

    /**
     * Required. A list containing all policy names, in the new order. Each name
     * is in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     *
     * Generated from protobuf field <code>repeated string names = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getNames()
    {
        return $this->names;
    }

    /**
     * Required. A list containing all policy names, in the new order. Each name
     * is in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     *
     * Generated from protobuf field <code>repeated string names = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setNames($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->names = $arr;

        return $this;
    }

}

